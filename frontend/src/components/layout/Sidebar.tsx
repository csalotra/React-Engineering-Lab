import{Box, Typography } from "@mui/material"

export default function Sidebar(){
  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        borderRight: 1,
        borderColor: "divider",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{mb:4}}>
        ElectricfieldGrid
      </Typography>

      <Typography sx={{mb:2}}>Dashboard</Typography>
      <Typography sx={{mb:2}}>Substations</Typography>
      <Typography sx={{mb:2}}>Forecast</Typography>
      <Typography>Settings</Typography>
    </Box>

  );
}