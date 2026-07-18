import { useState, useEffect } from "react";
import type { Substation } from "../types/Substation";
import { getSubstations } from "../api/substations";


export default function useSubstations(){

  const [substations, setSubstations] = useState<Substation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSubstations = async(signal: AbortSignal) => { 

    setIsLoading(true);
    setError(null);

    try{
      const response = await getSubstations();
      
      if(!response.ok){
        throw new Error(
            `HTTP ${response.status}`
        );
      }
      const data: Substation[] = await response.json();
      setSubstations(data);
    }
    catch(err){
      if (
        err instanceof DOMException &&
        err.name === "AbortError"
      ) {
        return;
      }
      if (err instanceof Error) {
          setError(err.message);
      } else {
          setError("Unknown error");
      }
    }
    finally{
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    const controller = new AbortController();
    fetchSubstations(controller.signal);
    return () => {
      controller.abort();
    }
  }, []);

  const updateThreshold = (
    id: string, 
    threshold: number
  ) => {
    setSubstations((previousSubstations) => {
      return previousSubstations.map((substation)=>{
        if (substation.id === id){
           return { 
            ...substation,
            warningThreshold:threshold
          };
        }
        return substation;
      });
    });
  };

  return {
    substations,
    updateThreshold
  }
}