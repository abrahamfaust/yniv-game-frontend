import { Box } from "@mui/material";
import React from "react";
import { CardBack } from "./card";
import DisplaydCards from "./DisplaydCards";
import { openCard } from "../pages/example";

export default function GamePlace({}) {
  const openCards = openCard();
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "50%",
        minHeight: "300px",
      }}
    >
      <Box >
      <CardBack />
    </Box>
    <Box sx={{width:'100%', height:'50%', marginTop:'15px'}}>
     <DisplaydCards cards={openCards}/>
    </Box>
    </Box>
  );
}
