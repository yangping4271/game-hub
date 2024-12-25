import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameList from "./components/GameList"
import GenreList from "./components/GenreList"

function App() {
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameList />
      </GridItem>
    </Grid>
  )
}

export default App
