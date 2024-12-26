import { Box, SimpleGrid, Text, Spinner, Image, Select, HStack } from '@chakra-ui/react';
import { useGames } from '../hooks/useGames';
import { usePlatforms } from '../hooks/usePlatforms';
import { useState } from 'react';

interface Props {
  selectedGenre?: string;
}

const GameList = ({ selectedGenre }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>();
  const { platforms } = usePlatforms();
  const { games, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  if (error) return <Text color="red.500">{error}</Text>;
  if (isLoading) return <Spinner />;

  return (
    <Box padding={5}>
      <HStack spacing={4} marginBottom={5}>
        <Select 
          placeholder="Select Platform" 
          value={selectedPlatform} 
          onChange={(e) => setSelectedPlatform(e.target.value || undefined)}
          width="200px"
        >
          {platforms.map(platform => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </Select>
      </HStack>
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }} 
        spacing={6}
      >
        {games.map(game => (
          <Box key={game._id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            {game.image && (
              <Image
                src={game.image}
                alt={game.name}
                width="100%"
                height="200px"
                objectFit="cover"
              />
            )}
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold">{game.name}</Text>
              {game.description && <Text mt={2}>{game.description}</Text>}
              <Text mt={2}>
                {game.genre && `Genre: ${game.genre}`} 
                {game.platform && ` | Platform: ${game.platform}`}
                {game.price && ` | Price: $${game.price}`}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default GameList; 