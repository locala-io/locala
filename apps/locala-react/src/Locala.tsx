import React from "react";

declare global {
  namespace Locala {
    export type Locale = "";
    export type LocaleStrings = "";
  }
}

export function Locala(key: Locala.LocaleStrings) {}

export function locala(key: Locala.LocaleStrings): string {
  return "";
}

export default Locala;
