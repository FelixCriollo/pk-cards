import ControlButton from "./ControlButton"
import { PokemonControlS } from "./controls.style"

export default function PokemonControl({ idPokemon, getPokemon, setIdPokemon }) {
  return (
    <PokemonControlS>
      <ControlButton setIdPokemon={setIdPokemon} direction="left" getPokemon={getPokemon} idPokemon={idPokemon}/> 
      <ControlButton setIdPokemon={setIdPokemon} direction="right" getPokemon={getPokemon} idPokemon={idPokemon}/> 
    </PokemonControlS>
  )
}