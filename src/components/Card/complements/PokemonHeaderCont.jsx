import { zeroPad } from "@utils"
import { CardT, CardId } from "../card.styles"
import { CardHeader } from "../cardContainers.styles"

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