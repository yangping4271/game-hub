import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import NavBar from "./components/NavBar"
import GameList from "./components/GameList"
import GenreList from "./components/GenreList"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>();

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg:  `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameList selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
