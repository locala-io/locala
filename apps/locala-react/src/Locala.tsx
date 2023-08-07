import { locala } from "locala";
import React, { Fragment } from "react";

export interface LocalaProps {
  id: locala.LocaleStrings;
  decorate?: boolean;
}

export function Locala({ id, decorate }: LocalaProps) {
  if (decorate) {
    return <span data-locala-id={id}>{id}</span>;
  }

  return <Fragment>{id}</Fragment>;
}

export function locala(id: locala.LocaleStrings): string {
  return id;
}

export default Locala;
