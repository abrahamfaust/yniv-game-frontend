import { Box, createStyles, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import backgroundImage from "/table.jpg"; // Import the image file
import { CardBack, CardFront } from "../components/card";
import PlayersCards from "../components/PlayersCards.jsx";
import DisplaydCards from "../components/DisplaydCards";
import MyPlace from "../components/MyPlace.jsx";
import GamePlace from "../components/GamePlace.jsx";
import PlayersPlace from "../components/PlayersPlace.jsx";

export default function MultipleGame() {
  const [cardsToSend, setCardsToSend] = useState([]);

  const sendData = ({ newCard = false, oldCard = null }) => {
    console.log("oldCard: ", oldCard);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <GamePlace />
      <PlayersPlace />
      <MyPlace setCardsToSend={setCardsToSend} />
    </Box>
  );
}
