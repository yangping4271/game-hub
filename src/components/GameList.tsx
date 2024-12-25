import { Box, List, ListItem, Text, Spinner } from '@chakra-ui/react';
import { useGames } from '../hooks/useGames';

const GameList = () => {
  const { games, error, isLoading } = useGames();

  if (error) return <Text color="red.500">{error}</Text>;
  if (isLoading) return <Spinner />;

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