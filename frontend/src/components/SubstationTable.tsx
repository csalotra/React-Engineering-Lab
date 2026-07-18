import type { Substation } from "../types/Substation";
import SubstationRow from "./SubstationRow";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";

interface SubstationTableProps {
  substations: Substation[];
  onEdit: (substation: Substation) => void;
}

export default function SubstationTable({
  substations,
  onEdit,
}: SubstationTableProps) {
  console.log("Table rendered");
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Current Load</TableCell>
            <TableCell>Warning Threshold</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {substations.map((substation) => (
            <SubstationRow
              key={substation.id}
              substation={substation}
              onEdit={onEdit}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}