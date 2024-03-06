import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import backgroundImage from '../../public/backgroundLobby.png'; // Import the image file


import cards from "../assets/cards";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();


  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, // Use inline style to set background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
        onClick={() => navigate('/single-game')}
        >
        SignleGame
      </Button>
      <Button
        variant="contained"
        sx={{ marginBottom: 10 }}
        onClick={() => navigate('/multiple-game/1')}
        >
        MultiPlyer
      </Button>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ marginBottom: 10 }}
      >
        press
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
