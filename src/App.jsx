import { PokemonCard } from './components/PokemonCard'
import { getPokemonData } from './api/obtenerPokemon';
import { PokemonCardLoader } from './components/pokemonCardLoader';
import { useEffect, useState } from 'react';

function App() {
  // const [pokemon, setPokemon] = useState({})

  // useEffect(() => {
  //   const obtenerData = async () => {
  //     const data = await getPokemonData(1)
  //     setPokemon(data)
  //   }
  //   obtenerData()
  // }, [])

  return (
    <div className="App">
      {/* <PokemonCard pokemon={pokemon} /> */}
      <PokemonCardLoader />
    </div>
  )
}

export default App
