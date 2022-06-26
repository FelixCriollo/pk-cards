import { colors } from "../data/colors"
// import { findColorByNameObj } from "../utils"
import { CardId, CardT } from "./cardStyles";
import { PokemonType } from "./PokemonType";


function PokemonCard({ pokemon }) {
  // console.log(pokemon);
  if (Object.entries(pokemon).length !== 0) {
    const color = colors[pokemon.types[0]]
    console.log(color);
  }
  // const type = pokemon.types ?? "fire" 
  // console.log(pokemon.types);
  // console.log(type[0]);
  // console.log(colors["rock"]);
  // console.log(Object.entries(pokemon).length !== 0);

  return (
    <div>
      {/* <CardT>{pokemon.name}</CardT>
      <CardId>{pokemon.id}</CardId>
      <img src={pokemon.image} alt={pokemon.name}/> */}
      {/* <PokemonType type={pokemon.types[0]}/> */}
    </div>
  )
}

export { PokemonCard }