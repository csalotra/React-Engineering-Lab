export interface Substation{
  id: string;
  name: string;
  region: string;
  city: string;
  currentLoadMW: number;
  maxCapacityMW: number;
  forecastLoadMW: number;
  warningThreshold: number;
  status: "Healthy" | "Warning" | "Critical";
  lastUpdated: string;
}