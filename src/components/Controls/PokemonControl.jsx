import ControlButton from "./ControlButton"
import { PokemonControlS } from "./controls.style"

export default function PokemonControl({ idPokemon, getPokemon }) {
  return (
    <PokemonControlS>
      <ControlButton direction="left" getPokemon={getPokemon} idPokemon={idPokemon}/> 
      <ControlButton direction="right" getPokemon={getPokemon} idPokemon={idPokemon}/> 
    </PokemonControlS>
  )
}