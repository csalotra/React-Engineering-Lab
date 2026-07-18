import { useState, useMemo } from "react";
import type { Substation } from "../types/Substation";


export default function useSubstationSearch(substations: Substation[]){

  const [searchText, setSearchText] = useState("")

  const filteredSubstations = useMemo(()=>{
      console.log("Filtering substations...");
      const normalizedSearchText = searchText.toLowerCase();

      return substations.filter((substation) =>{
        const normalizedName = substation.name.toLowerCase();
        return normalizedName.includes(normalizedSearchText)
      });
  
    },[substations, searchText])

  return {
    searchText,
    setSearchText,
    filteredSubstations,
  }
}