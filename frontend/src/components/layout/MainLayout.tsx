import {Box} from "@mui/material"
import Sidebar from "./Sidebar";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
 

interface MainLayoutPtops{
  children: ReactNode;
}


export default function MainLayout({children}: MainLayoutPtops){
  return (
    <Box sx={{ display: "flex", minHeight: "100vh"}}>

      <Sidebar />

      <Box
        sx={{
          flex: 1,
          bgcolor: "grey.100",
        }}
      > 

        <Navbar/>

        <Box sx={{p:3}}>

          {children}

        </Box>

      </Box>

    </Box>
  );
}