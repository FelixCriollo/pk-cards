import { CardContainer, CardContInfo, PokeType, CardStt, CardP } from "./cardStyles"
import { PokemonAboutCont } from "./PokemonAboutCont"
import './cardStyles.css'

function PokemonCardLoader() {
  return (
    <CardContainer>
      <CardContInfo>
        <div className="CardTypeCont">
          <PokeType>Type</PokeType>
          <PokeType>Type</PokeType>
        </div>

        <CardStt>About</CardStt>

        <PokemonAboutCont />

        <CardP> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet in eros.
        </CardP>

        <CardStt>Base Stats</CardStt>

      </CardContInfo>
    </CardContainer>
  )
}

export { PokemonCardLoader }