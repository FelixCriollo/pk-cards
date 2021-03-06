import { PokeType, CardStt,  } from "./card.styles"
import { CardContainer, CardContInfo, CardContentItems  } from "./cardContainers.styles"
import { PokemonAboutCont } from "./complements/PokemonAboutCont"
import { PokemonStatsCont } from "./complements/PokemonStatsCont"
import { PokemonHeaderCont } from "./complements/PokemonHeaderCont"
import shadowP from "../../assets/pokeLoader.png"
import './card.styles'

export default function PokemonCardLoader() {
  return (
    <CardContainer>
      <PokemonHeaderCont />

      <CardContInfo>
        <img className="PokemonImage" src={shadowP} alt="pokemon placeholder"/>

        <CardContentItems>
          <PokeType>Type</PokeType>
          <PokeType>Type</PokeType>
        </CardContentItems>

        <CardStt>About</CardStt>

        <PokemonAboutCont />

        <CardStt>Base Stats</CardStt>

        <div>
          <PokemonStatsCont stat="HP" statValue={45}/>
          <PokemonStatsCont stat="ATK" statValue={49}/>
          <PokemonStatsCont stat="DEF" statValue={49}/>
          <PokemonStatsCont stat="SATK" statValue={65}/>
          <PokemonStatsCont stat="SDEF" statValue={65}/>
          <PokemonStatsCont stat="SPD" statValue={45}/>
        </div>
      </CardContInfo>
    </CardContainer>
  )
}