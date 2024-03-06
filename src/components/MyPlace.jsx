import { Box } from "@mui/material";
import React, { useState } from "react";
import { myPlayer } from "../pages/example";
import { CardFront } from "./card";

export default function MyPlace({ setCardsToSend }) {
  const player = myPlayer();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        position: "absolute",
        bottom: 5,
        borderRadius: "100%",
        padding: "16px",
        paddingTop: "50px",
        borderColor: "text.main",
        borderTopStyle: "dashed",
        width: "100%",
        height: "20%",
        alignItems: "center",
      }}
    >
      {player.cards.map((card, index) => (
        <MyCard key={index} card={card} setList={setCardsToSend} />
      ))}
    </Box>
  );
}

const MyCard = ({ card, setList }) => {
  const [margin, setMargin] = useState(false);

  const handleClick = () => {
    setMargin((margin) => {
      if (margin) {
        setList((list) => {
          const newList = list.filter((item) => item.value !== card.value);
          return newList;
        });
      } else {
        setList((list) => [...list, card]);
      }
      return !margin;
    });
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        marginBottom: margin ? 5 : 0,
        marginTop: margin ? 0 : 5,
      }}
    >
      <CardFront type={card.suit} number={card.value} />
    </Box>
  );
};
