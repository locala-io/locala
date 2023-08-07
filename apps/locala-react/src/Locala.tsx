import React from "react";

declare global {
  namespace Locala {
    type Locale = "";
    type LocaleStrings = "";
  }
}

export interface LocalaProps {
  key: Locala.LocaleStrings;
}

export function Locala({ key }: LocalaProps) {
  return <>{key}</>;
}

export function locala(key: Locala.LocaleStrings): string {
  return "";
}

export default Locala;
