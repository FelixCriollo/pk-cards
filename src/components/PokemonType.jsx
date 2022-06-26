import { colors } from "../data/colors"
// import { findColorByNameObj } from "../utils"
import { PokeType } from "./cardStyles";

function PokemonType(type) {
  const color = findColorByNameObj(type, colors)[1]
  return (
    <PokeType bgColor={color}>{type}</PokeType>
  )
}

export { PokemonType }