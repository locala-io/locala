/// <reference types="locala" />

import React from "react";


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
