import { Box } from "@mui/material";
import React, { useState } from "react";
import { CardFront } from "./card";

export default function DisplaydCards({ cards, fnc }) {
  const [lastPile, setLastPile] = useState(false);

  return (
    <Box sx={{ bgcolor: "blue" }}>
      {cards.map((card, index) => {
        return (
          <PileOfCards
          key={index}
            cards={card}
            index={index}
            length={cards.length}
            display={index === cards.length - 1 ? true : false}
          />
        );
      })}
    </Box>
  );
}

const getZIndex = (length, index) => {
  const middleIndex = Math.floor(length / 2);
  const distance = Math.abs(index - middleIndex);
  return middleIndex + distance;
};

const PileOfCards = ({ fnc, cards, display = false, index, length }) => {
  const rotate = (num) => {
    switch (num) {
      case 1:
        return [0];
      case 2:
        return [-5, 5];
      case 3:
        return [-15, 5, 15];
      case 4:
        return [-15, -5, 5, 15];
      case 5:
        return [-15, -5, 0, 5, 15];
      default:
        break;
    }
  };
  const numberOfCards = cards.length;
  const cardsRotate = rotate(numberOfCards);
  const opacity = length < 3 ? `${index * 30 + 70}` : `${index * 40 + 10}%`;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
        borderRadius: "100%",
        position: "absolute",
        zIndex: index,
        opacity: opacity,
      }}
    >
      {cards.map((card, index) => {
        let goodCard = false;
        if (display) {
          if (index === 0 || index === numberOfCards - 1) goodCard = true;
        }

        const handleClick = async () => {
          if (goodCard) fnc({ oldCard: card });
        };

        return (
          <Box
            onClick={handleClick}
            key={index}
            sx={{
              transform: `rotate(${cardsRotate[index]}deg)`,
              margin: numberOfCards < 3 ? "-5px" : "-10px",
              zIndex: getZIndex(numberOfCards, index),
              ":after": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: goodCard ? "transparent" : "primary.main",
                opacity: goodCard ? "100%" : "50%",
              },
            }}
          >
            {<CardFront type={card.suit} number={card.value} />}
          </Box>
        );
      })}
    </Box>
  );
};
