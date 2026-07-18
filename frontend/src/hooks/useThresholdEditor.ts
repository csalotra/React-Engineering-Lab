import type { Substation } from "../types/Substation";
import { useState } from "react";

export default function useThresholdEditor(){

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSubstation, setSelectedSubstation] = useState<Substation| null>(null);

  const startEditing = (substation: Substation) =>{
    setDrawerOpen(true)
    setSelectedSubstation(substation)

  }
  const cancelEditing = () =>{
     setDrawerOpen(false)
     setSelectedSubstation(null)
  }

  return {
    drawerOpen,
    selectedSubstation,
    startEditing,
    cancelEditing,
  }
}





