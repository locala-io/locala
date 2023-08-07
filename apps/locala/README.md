oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g locala
$ locala COMMAND
running command...
$ locala (--version)
locala/0.0.0 darwin-x64 node-v18.13.0
$ locala --help [COMMAND]
USAGE
  $ locala COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`locala hello PERSON`](#locala-hello-person)
* [`locala hello world`](#locala-hello-world)
* [`locala help [COMMANDS]`](#locala-help-commands)
* [`locala plugins`](#locala-plugins)
* [`locala plugins:install PLUGIN...`](#locala-pluginsinstall-plugin)
* [`locala plugins:inspect PLUGIN...`](#locala-pluginsinspect-plugin)
* [`locala plugins:install PLUGIN...`](#locala-pluginsinstall-plugin-1)
* [`locala plugins:link PLUGIN`](#locala-pluginslink-plugin)
* [`locala plugins:uninstall PLUGIN...`](#locala-pluginsuninstall-plugin)
* [`locala plugins:uninstall PLUGIN...`](#locala-pluginsuninstall-plugin-1)
* [`locala plugins:uninstall PLUGIN...`](#locala-pluginsuninstall-plugin-2)
* [`locala plugins update`](#locala-plugins-update)

## `locala hello PERSON`

Say hello

```
USAGE
  $ locala hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/locala-io/locala/blob/v0.0.0/dist/commands/hello/index.ts)_

## `locala hello world`

Say hello world

```
USAGE
  $ locala hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ locala hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/locala-io/locala/blob/v0.0.0/dist/commands/hello/world.ts)_

## `locala help [COMMANDS]`

Display help for locala.

```
USAGE
  $ locala help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for locala.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.15/src/commands/help.ts)_

## `locala plugins`

List installed plugins.

```
USAGE
  $ locala plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ locala plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `locala plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ locala plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ locala plugins add

EXAMPLES
  $ locala plugins:install myplugin 

  $ locala plugins:install https://github.com/someuser/someplugin

  $ locala plugins:install someuser/someplugin
```

## `locala plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ locala plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ locala plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/inspect.ts)_

## `locala plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ locala plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ locala plugins add

EXAMPLES
  $ locala plugins:install myplugin 

  $ locala plugins:install https://github.com/someuser/someplugin

  $ locala plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/install.ts)_

## `locala plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ locala plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ locala plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/link.ts)_

## `locala plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ locala plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ locala plugins unlink
  $ locala plugins remove
```

## `locala plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ locala plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ locala plugins unlink
  $ locala plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/uninstall.ts)_

## `locala plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ locala plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ locala plugins unlink
  $ locala plugins remove
```

## `locala plugins update`

Update installed plugins.

```
USAGE
  $ locala plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/update.ts)_
<!-- commandsstop -->
