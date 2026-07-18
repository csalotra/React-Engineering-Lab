import type { Substation } from "../types/Substation";
import StatusChip from "./dashboard/StatusChip";
import {TableCell, TableRow, Button} from "@mui/material";

interface SubstationRowProps {
  substation: Substation;
  onEdit: (substation: Substation) => void;
}

export default function SubstationRow({
  substation,
  onEdit,
}: SubstationRowProps) {
  console.log("Row rendered");
  return (
    <TableRow hover>
      <TableCell>{substation.name}</TableCell>

      <TableCell>{substation.city}</TableCell>

      <TableCell>
        <StatusChip status={substation.status} />
      </TableCell>

      <TableCell>{substation.currentLoadMW} MW</TableCell>

      <TableCell>{substation.warningThreshold} MW</TableCell>

      <TableCell align="right">
        <Button
          variant="contained"
          size="small"
          onClick={() => onEdit(substation)}
        >
          Edit
        </Button>
      </TableCell>
    </TableRow>
  );
}
