import { Box } from "@mui/material";
import cardImage from "/cards.png"; // Import the image file
import clubs from "/clubs.png"; // Import the image file
import spades from "/spades.png"; // Import the image file
import diamonds from "/diamonds.png"; // Import the image file
import hearts from "/hearts.png"; // Import the image file
import joker from "/joker.png"; // Import the image file
import { useEffect, useState } from "react";

export const CardBack = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cardImage})`,
        backgroundSize: "cover",
        height: 120,
        width: 70,
        borderRadius: 2,
        border: 1,
        borderColor: "#000",
        // boxShadow: "5px 5px 10px 1px rgba(100, 100, 100)", //
      }}
    ></Box>
  );
};
export const CardFront = ({ type, number }) => {
  const [shape, setSahpe] = useState("");

  useEffect(() => {
    switch (type) {
      case "hearts":
        setSahpe(hearts);
        break;
      case "spades":
        setSahpe(spades);

        break;
      case "clubs":
        setSahpe(clubs);
        break;
      case "diamonds":
        setSahpe(diamonds);

        break;
      case "joker":
        setSahpe(joker);

        break;

      default:
        break;
    }
  }, []);

 
  return (
    <Box
      sx={{
        bgcolor: "#f8f7e3",
        height: 120,
        width: 70,
        borderRadius: 2,
        boxShadow: "5px 5px 10px 1px rgba(100, 100, 100)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 5,
          left: 5,
          fontSize: "26px",
          fontWeight: 700,
          color: "#1466a0",
          cursor:'context-menu'
        }}
      >
        {number}
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${shape})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 120,
          width: 60,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 5,
          right: 5,
          color: "#e34a5c",
          fontSize: "26px",
          fontWeight: 700,
          transform:'rotate(180deg)',
          cursor:'context-menu'
        }}
      >
        {number}
      </Box>
    </Box>
  );
};
