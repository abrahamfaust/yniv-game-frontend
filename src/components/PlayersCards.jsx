import { Box } from "@mui/material";
import React from "react";
import { CardBack } from "./card";

export default function PlayersCards({ name, cards, position }) {
  const displey = (pos) => {
    switch (pos) {
      case "top":
        return {
          top: "-50px",
          right: "20%",
          transform: "rotate(180deg)",
        };
      case "right":
        return {
          top: "25%",
          right: "-110px",
          transform: "rotate(-90deg)",
        };

      case "left":
        return {
          top: "25%",
          left: "-110px",
          transform: "rotate(90deg)",
        };

      default:
        break;
    }
  };
  const rotate = (num) => {
    switch (num) {
      case 1:
        return [0];
      case 2:
        return [-5, 5];

      case 3:
        return [-15, 5, 15];
      case 4:
        return [-15, 0, 10, 15];

      case 5:
        return [-15, -15, 0, 15, 15];

      default:
        break;
    }
  };

  return (
    <Box
      sx={[
        {
          position: "absolute",
          borderRadius:'100%',
          borderColor:'text.main',
          borderTopStyle:'dashed'
        },
        displey(position),
      ]}
    >
      <Box
        sx={{
          fontSize: "26px",
          color: "#fff",
          paddingY:'8px',
          textAlign:'center',
          transform: position === "top" && "rotate(180deg)",
        }}
      >
        {name}
      </Box>
      <Box
        sx={[
          {
            width: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            paddingLeft: "50px",
          },
        ]}
      >
        {cards.map((card, index) => {
          const number = rotate(cards.length);
          return (
            <Box
            key={index}
              sx={{
                marginLeft: -5,
                transform: `rotate(${number[index]}deg)`,
                borderRadius: 2,
              }}
            >
              <CardBack />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
