import { DocumentColorEnum } from "~/utils/colors";

export enum DocumentType {
  Report = "Report", // TenK
  Observation = "Observation",  // TenQ
  Weather = "Weather"

}

export type Ticker = {
  ticker: string;
  fullName: string;
};

export interface SecDocument extends Ticker {
  id: string;
  url: string;
  year: string;
  docType: DocumentType;
  quarter?: string;
  color: DocumentColorEnum;
}
