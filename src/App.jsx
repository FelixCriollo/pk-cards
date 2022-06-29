import { useEffect, useState } from 'react';
import { PokemonCard, PokemonCardLoader } from './components/Card';
import { getPokemonData } from './api/obtenerPokemon';

function App() {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const obtenerData = async () => {
      const data = await getPokemonData(1)
      setPokemon(data)
    }
    obtenerData()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    const poke = e.target.pokeInput.value
    const data = await getPokemonData(poke)
    setPokemon(data)
  }

  return (
    <div className="App">
      <form onSubmit={e => handleSearch(e)}>
        <input type="text" name="pokeInput" id="" />
        <button type="submit">dale</button>
      </form>
      {
        Object.entries(pokemon).length !== 0
          ? <PokemonCard pokemon={pokemon} />
          : <PokemonCardLoader />
      }      
    </div>
  )
}

export default App
