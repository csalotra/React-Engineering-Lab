import Chip from "@mui/material/Chip";
import type { Substation } from "../../types/Substation";

interface StatusChipProps {
  status: Substation["status"];
}

export default function StatusChip({ status }: StatusChipProps) {
  switch (status) {
    case "Healthy":
      return (
        <Chip
          label="Healthy"
          color="success"
          size="small"
        />
      );

    case "Warning":
      return (
        <Chip
          label="Warning"
          color="warning"
          size="small"
        />
      );

    case "Critical":
      return (
        <Chip
          label="Critical"
          color="error"
          size="small"
        />
      );

    default:
      return (
        <Chip
          label={status}
          size="small"
        />
      );
  }
}