import { Box } from '@mui/material';
import React from 'react'
import { restofPlayers } from '../pages/example';
import PlayersCards from './PlayersCards';

export default function PlayersPlace() {
    const players = restofPlayers()
 
  return (
    <DisplayPlayers players={players}/>
  )
}

const DisplayPlayers = ({players}) => {
  const num = players.length
  switch (num) {
    case 3:
      return (
        <Box>
          <PlayersCards
            name={players[0].name}
            cards={players[0].cards}
            position={"right"}
          />
          <PlayersCards
            name={players[1].name}
            cards={players[1].cards}
            position={"top"}
          />
          <PlayersCards
            name={players[2].name}
            cards={players[2].cards}
            position={"left"}
          />
        </Box>
      );
      break;
    case 2:
      return (
        <Box>
          <PlayersCards
            name={players[0].name}
            cards={players[0].cards}
            position={"right"}
          />
          <PlayersCards
            name={players[1].name}
            cards={players[1].cards}
            position={"left"}
          />
        </Box>
      );
      break;
    case 1:
      return (
        <Box>
          <PlayersCards
            name={players[0].name}
            cards={players[0].cards}
            position={"top"}
          />
        </Box>
      );
      break;

    default:
      break;
  }
};