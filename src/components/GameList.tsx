import { useEffect, useState } from 'react';
import { Box, List, ListItem, Text } from '@chakra-ui/react';

interface GameType {
  _id: string;
  name: string;
  description?: string;
  genre?: string;
  platform?: string;
  price?: number;
  releaseDate?: Date;
}

const GameList = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/games');
        const data = await response.json();
        setGames(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchGames();
  }, []);

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box padding={5}>
      <List spacing={3}>
        {games.map(game => (
          <ListItem key={game._id} p={3} borderWidth="1px" borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold">{game.name}</Text>
            {game.description && <Text mt={2}>{game.description}</Text>}
            <Text mt={2}>
              {game.genre && `Genre: ${game.genre}`} 
              {game.platform && ` | Platform: ${game.platform}`}
              {game.price && ` | Price: $${game.price}`}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default GameList; 