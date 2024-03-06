import { useEffect, useState } from "react";
import originalCards from "../assets/cards";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const mixedCards = shuffleArray([...originalCards]);


export const restofPlayers = () => {
    const [cards, setCards] = useState([
        mixedCards.slice(0,5),
        mixedCards.slice(0,5),
        mixedCards.slice(0,5)
    ])
    return  [
        {
          id: 0,
          name: "Abraham",
          cards: cards[0],
        },
        {
          id: 1,
          name: "David",
          cards: cards[1],
        },
        {
          id: 2,
          name: "Nissim",
          cards: cards[2],
        },
      ];
}

export const myPlayer = () => {
const [myCards, setMyCards] = useState(mixedCards.slice(0, 5));


  return {
    id: 0,
    name: "Moshe",
    cards: myCards,
  };
};

export const openCard = () => {
// const [openCards, setOpenCards] = useState(mixedCards.slice(0, 1));
const [openCards, setOpenCards] = useState([
    mixedCards.slice(0, 5),
    mixedCards.slice(0, 3),
    mixedCards.slice(0, 4),
    mixedCards.slice(0, 2)
]);
return openCards
}
