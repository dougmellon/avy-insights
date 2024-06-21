import { DocumentType } from "~/types/document";
import type { SecDocument } from "~/types/document";

import type { SelectOption } from "~/types/selection";
import { filterByTickerAndType } from "./documents";

export const documentTypeOptions = [
  { value: DocumentType.Report, label: DocumentType.Report },
  { value: DocumentType.Observation, label: DocumentType.Observation },
] as SelectOption[];

function documentToYearOption(document: SecDocument): SelectOption {
  if (document.quarter) {
    return {
      value: document.id,
      label: document.year + " Q" + document.quarter,
    };
  }
  return {
    value: document.id,
    label: document.year,
  };
}

export function getAvailableYears(
  ticker: string,
  type: DocumentType,
  documents: SecDocument[]
): SelectOption[] {
  const docs = filterByTickerAndType(ticker, type, documents);
  const yearOptions: SelectOption[] = docs.map(documentToYearOption);
  return yearOptions;
}
