// @ts-ignore
import { Args, Command, Flags } from "@oclif/core";
import * as path from "path";
import * as fs from "fs";
import { parse } from "yaml";
import { compile } from "handlebars";

export default class Generate extends Command {
  static description = "Generate local types";

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ];

  static flags = {
    config: Flags.string({
      char: "c",
      description: "Your local configuration file",
      default: "locala.yaml",
    }),
    output: Flags.string({
      char: "o",
      description: "Output for locales",
      default: "src",
    }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Generate);

    const configPath = path.join(process.cwd(), flags.config);

    if (!fs.existsSync(configPath)) {
      this.logToStderr(`Config file not found at ${configPath}`);
      return;
    }

    const config = parse(fs.readFileSync(configPath, "utf8"));

    const output = "locala.d.ts";

    fs.appendFileSync(output, `declare module locala {`);

    const template = compile(CONFIG_TEMPLATE);

    const data = {
      date: new Date().toISOString(),
      source: flags.config,
      locales: [] as string[],
      strings: [] as string[],
    };

    if (config.locales) {
      data.locales = config.locales;
    }

    const strings: Record<string, string> = {};

    if (config.strings) {
      function getKeys(obj: any, prefix: string = "") {
        for (const [key, value] of Object.entries(obj)) {
          if (typeof value === "object") {
            getKeys(value, prefix + key + ".");
          } else {
            strings[prefix + key] = value as string;
          }
        }
      }

      getKeys(config.strings);

      data.strings = Object.keys(strings);
    }

    const result = template(data);

    fs.writeFileSync(output, result);

    for (const locale of config.locales) {
      const filePath = path.join(
        process.cwd(),
        flags.output,
        "locales",
        `${locale}.ts`,
      );

      const template = compile(LOCALE_FILE_TEMPLATE);

      const result = template({
        date: new Date().toISOString(),
        source: flags.config,
        strings: JSON.stringify(strings, null, 2),
      });

      fs.writeFileSync(filePath, result);
    }

    if (config.locales) {
      const filePath = path.join(
        process.cwd(),
        flags.output,
        "locales",
        "index.ts",
      );

      const template = compile(LOCALES_FILE_TEMPLATE);

      const data = {
        date: new Date().toISOString(),
        source: flags.config,
        locales: config.locales.map((locale: string) => ({
          name: locale,
          alias: locale.replace(/-/g, "_"),
        })),
      };

      const result = template(data);

      fs.writeFileSync(filePath, result);
    }

    this.log(`Generated locales based on ${flags.config} in ${flags.output}`);
  }
}

const CONFIG_TEMPLATE = `// This file is generated by locala. Do not edit.
// Source: {{source}}

declare module locala {
    type Locale =
      {{#each locales}}
        | "{{this}}"
      {{/each}};
    type LocaleStrings =
      {{#each strings}}
        | "{{this}}"
      {{/each}};
}

export { locala };`;

const LOCALE_FILE_TEMPLATE = `// This file is generated by locala. Do not edit.
// Source: {{source}}

export const strings = {{{strings}}} as const;`;

const LOCALES_FILE_TEMPLATE = `// This file is generated by locala. Do not edit.
// Source: {{source}}

{{#each locales}}
import { strings as {{alias}} } from "./{{name}}";
{{/each}}

{{#each locales}}
export type LocaleStrings_{{alias}} = keyof typeof {{alias}};
{{/each}}

export type LocaleStrings =
  {{#each locales}}
    | LocaleStrings_{{alias}}
  {{/each}}

export type Locale =
  {{#each locales}}
    | "{{name}}"
  {{/each}}

export const locales = {
{{#each locales}}
"{{name}}": {{alias}},
{{/each}}
} as const`;
