import { List, ListItem, Text, Spinner } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  if (error) return <Text color="red.500">{error}</Text>;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Text fontSize="2xl" marginBottom={3}>Genres</Text>
      <List spacing={3}>
        {genres.map(genre => (
          <ListItem key={genre} paddingY="5px" cursor="pointer" _hover={{
            color: "blue.500",
            textDecoration: "underline"
          }}>
            {genre}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList 