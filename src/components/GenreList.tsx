import { List, ListItem, Text } from "@chakra-ui/react"

const genres = [
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Sports",
  "Puzzle",
  "Racing",
  "Shooter"
]

const GenreList = () => {
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