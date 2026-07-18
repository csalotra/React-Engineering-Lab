import type { ReactNode } from "react";

export type SummaryCardColor =
  | "success"
  | "warning"
  | "error";

export interface SummaryCardConfig {
  title: string;
  value: number;
  color: SummaryCardColor;
  icon: ReactNode;
}