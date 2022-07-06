import { useEffect, useState } from 'react';
import { PokemonCard, PokemonCardLoader } from './components/Card';
import { getPokemonData } from './api/obtenerPokemon';
import { HeaderS } from './styled-components/header.styles';
import { ContainerS } from './styled-components/container.styles';

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
      <HeaderS>
        <ContainerS>
          <img src="/PokeballLogo.png" className='logo' alt="pokeball" />

          <form onSubmit={e => handleSearch(e)}>
            <input type="text" name="pokeInput" className='inputS' />
            <button type="submit">dale</button>
          </form>
        </ContainerS>
      </HeaderS>
      <ContainerS>
        {
          Object.entries(pokemon).length !== 0
          ? <PokemonCard pokemon={pokemon} />
          : <PokemonCardLoader />
        }      
      </ContainerS>
    </div>
  )
}

export default App
