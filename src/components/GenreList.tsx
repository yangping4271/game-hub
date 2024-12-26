import { List, ListItem, Text, Spinner } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"

interface Props {
  onSelectGenre: (genre: string) => void;
  selectedGenre?: string;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (error) return <Text color="red.500">{error}</Text>;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Text fontSize="2xl" marginBottom={3}>类型</Text>
      <List spacing={3}>
        {genres.map(genre => (
          <ListItem 
            key={genre} 
            paddingY="5px" 
            cursor="pointer" 
            color={genre === selectedGenre ? "blue.500" : "inherit"}
            fontWeight={genre === selectedGenre ? "bold" : "normal"}
            _hover={{
              color: "blue.500",
              textDecoration: "underline"
            }}
            onClick={() => onSelectGenre(genre)}
          >
            {genre}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList 