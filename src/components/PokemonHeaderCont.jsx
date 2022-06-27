import { zeroPad } from "../utils/zeroFormat"
import { CardT, CardId, CardHeader } from "./cardStyles"

function PokemonHeaderCont({name = "Pokémon Name", id = "999"}) {
  
  const idF = zeroPad(id, 3)
  
  return(
    <CardHeader>
      <CardT>{name}</CardT>
      <CardId>#{idF}</CardId>
    </CardHeader>
  )
}

export { PokemonHeaderCont }