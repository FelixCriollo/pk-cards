import { useState } from 'react';
import { PokemonCard, PokemonCardLoader } from './components/Card';
import { HeaderS } from './styled-components/header.styles';
import { ContainerS } from './styled-components/container.styles';
import { useGetPokemon } from './hooks/useGetPokemon';
import { PokemonControl } from './components/Controls';
import { MainS } from './styled-components/main.styles';

function App() {
  const [pokemon, getPokemon] = useGetPokemon()
  const [idPokemon, setIdPokemon] = useState(1)
  console.log(idPokemon);

  const handleSearch = async (e) => {
    e.preventDefault()
    const poke = Number(e.target.pokeInput.value)
    getPokemon(poke)
  }

  const handleChangeInput = (e) => {
    const regex = new RegExp(/^[0-9,$]*$/);
    const idPokeL = e.target.value;

    if (idPokeL.match(regex)) {
      setIdPokemon(idPokeL)
    }
    if (Number(idPokeL) >= 898) {
      setIdPokemon("898")
    }
  }

  return (
    <div className="App">
        <HeaderS>
          <ContainerS>
            <img src="/PokeballLogo.png" className='logo' alt="pokeball" />

            <form onSubmit={e => handleSearch(e)}>
              <input 
                type="text" name="pokeInput" className='inputS'
                onChange={e => handleChangeInput(e)}
                value={idPokemon}
                />
              <button type="submit">Search</button>
            </form>
          </ContainerS>
        </HeaderS>

        <MainS>
          <ContainerS>
            {
              Object.entries(pokemon).length !== 0
              ? <PokemonCard pokemon={pokemon} />
              : <PokemonCardLoader />
            }
            <PokemonControl getPokemon={getPokemon} idPokemon={pokemon.id} 
              setIdPokemon={setIdPokemon}/>
          </ContainerS>
        </MainS>
    </div>
  )
}

export default App
