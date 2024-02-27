import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import cards from "../assets/cards";

export default function Lobby() {
  var screenHeight = window.innerHeight;
  const [number, setNumber] = useState(Math.floor(Math.random() * 13) + 1);
  const [color, setColor] = useState('');

  useEffect(() => {
    handleColor()
  },[number])

  const handleClick = () => {
    let newNumber = Math.floor(Math.random() * 52) + 1;
    setNumber(newNumber);
  };
  const handleColor = () => {
    if (cards[number].suit == 'diamonds' || cards[number].suit == 'hearts') setColor('#D40000')
    else setColor('#000')
  };

  return (
    <Box
      sx={{
        bgcolor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: screenHeight,
        flexDirection: "column",
      }}
    >
      <Button
        variant="contained"
        sx={{ marginBottom: 10 }}
        onClick={handleClick}
      >
        bress
      </Button>
      <Box sx={{ bgcolor: "white", borderRadius: 2, position: "relative" }}>
        <Typography sx={{ fontSize: 40, position: "absolute", left: 8, color:color}}>
          {cards[number].value}
        </Typography>
        <img src={`../../faces/${cards[number].svg}`} alt="" loading="lazy" />
        <Typography
          sx={{ fontSize: 40, position: "absolute", bottom: 0, right: 8, color:color }}
        >
          {cards[number].value}
        </Typography>
      </Box>
    </Box>
  );
}
