import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import NavBar from "./components/NavBar"
import GameList from "./components/GameList"
import GenreList from "./components/GenreList"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const [searchText, setSearchText] = useState('');

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg:  `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <GridItem area='nav'>
        <NavBar onSearch={setSearchText} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameList selectedGenre={selectedGenre} searchText={searchText} />
      </GridItem>
    </Grid>
  )
}

export default App
