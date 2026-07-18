import type { Substation } from "../../types/Substation";
import SummaryCard from "./SummaryCard";
import {Grid} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorIcon from "@mui/icons-material/Error";
import type { SummaryCardConfig } from "../../types/SummaryCard";
import React from "react";


interface SummaryCardsProps{
  substations: Substation[];
}

function SummaryCards({substations}:SummaryCardsProps){
  console.log("SummaryCards rendered");
  const healthyCount = substations.filter((substation)=>{
    return substation.status === "Healthy";
  }).length;

  const warningCount = substations.filter((substation)=>{
    return substation.status === "Warning";
  }).length;

  const criticalCount = substations.filter((substation)=>{
    return substation.status === "Critical";
  }).length;


  const cards: SummaryCardConfig[]  = [
    {
      title: "Healthy",
      value: healthyCount,
      color: "success",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Warning",
      value: warningCount,
      color: "warning",
      icon: <WarningAmberIcon />,
    },
    {
      title: "Critical",
      value: criticalCount,
      color: "error",
      icon: <ErrorIcon />,
    },
  ];
  
  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid
          key={card.title}
          size={{ xs: 12, sm: 6, lg: 4 }}
        >
          <SummaryCard
            title= {card.title}
            value= {card.value}
            color ={card.color}
            icon= {card.icon}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(SummaryCards)