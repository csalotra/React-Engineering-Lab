import type { Substation } from "../types/Substation"
import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Drawer } from "@mui/material";

interface ThresholdProps{
  open: boolean;
  substation: Substation | null;
  onClose: () => void;
  onApply: (id: string, draftThreshold: number) => void;
}


export default function EditThresholdDrawer({substation, onClose, onApply, open}:ThresholdProps){

  const [draftThreshold, setDraftThreshold] = useState<number | "">(substation?.warningThreshold ?? 0);

  const handleApply = () => {
    if (typeof draftThreshold === "number" && substation?.id){
        onApply(substation.id, draftThreshold)  ;  
    };
  };

  useEffect(() =>{
    if (substation) {
      setDraftThreshold(substation.warningThreshold);
    }
  },[substation]);


  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
    >
    <Box sx={{ p:3 }}>
      <Typography variant="h5">Edit Threshold</Typography>
      <p>{substation?.city}</p>
      <TextField
        label="Warning Threshold" 
        type="number"
        value={draftThreshold}
        onChange={(event)=>{

          const typedString = event.target.value;

          if (typedString === ""){
            setDraftThreshold("");
            return;
          }
          const typedNumber = Number(typedString);
          console.log(typedNumber);

          setDraftThreshold(typedNumber);
          }
        }
      />
      <Button variant="outlined" onClick={onClose}>Cancel</Button>
      <Button variant="contained" onClick={handleApply}>
        Apply
      </Button>
    </Box>
    </Drawer>
  )
}