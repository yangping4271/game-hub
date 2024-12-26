import { Box, SimpleGrid, Text, Spinner, Image, Select, HStack, Heading } from '@chakra-ui/react';
import { useGames, SortOption } from '../hooks/useGames';
import { usePlatforms } from '../hooks/usePlatforms';
import { useState } from 'react';

interface Props {
  selectedGenre?: string;
  searchText?: string;
}

const sortOptions = [
  { label: 'Price: Low to High', value: 'price', order: 'asc' },
  { label: 'Price: High to Low', value: 'price', order: 'desc' },
  { label: 'Release Date: Newest', value: 'releaseDate', order: 'desc' },
  { label: 'Release Date: Oldest', value: 'releaseDate', order: 'asc' },
] as const;

const GameList = ({ selectedGenre, searchText }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>();
  const [selectedSort, setSelectedSort] = useState<SortOption>();
  const { platforms } = usePlatforms();
  const { games, error, isLoading } = useGames(selectedGenre, selectedPlatform, selectedSort, searchText);

  if (error) return <Text color="red.500">{error}</Text>;
  if (isLoading) return <Spinner />;

  return (
    <Box padding={5}>
      {selectedGenre && (
        <Heading as='h1' marginBottom={5}>
          {selectedGenre} Games
        </Heading>
      )}
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
        <Select
          placeholder="Sort by..."
          value={selectedSort ? `${selectedSort.value}-${selectedSort.order}` : ''}
          onChange={(e) => {
            if (!e.target.value) {
              setSelectedSort(undefined);
              return;
            }
            const option = sortOptions.find(
              opt => `${opt.value}-${opt.order}` === e.target.value
            );
            setSelectedSort(option);
          }}
          width="200px"
        >
          {sortOptions.map(option => (
            <option 
              key={`${option.value}-${option.order}`} 
              value={`${option.value}-${option.order}`}
            >
              {option.label}
            </option>
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
                {game.releaseDate && ` | Released: ${new Date(game.releaseDate).toLocaleDateString()}`}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default GameList; 