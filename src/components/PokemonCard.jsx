import { CardContainer, CardContInfo, PokeType, CardStt, CardContentItems } from "./cardStyles"
import { PokemonAboutCont } from "./PokemonAboutCont"
import { PokemonStatsCont } from "./PokemonStatsCont"
import { PokemonHeaderCont } from "./PokemonHeaderCont"
import { colors } from "../data/colors"
import { toCapitalCase } from "../utils"


function PokemonCard({ pokemon }) {
  console.log(pokemon);
  const colorBase = colors[pokemon.types[0]] 

  return (
    <CardContainer bgColor={colorBase}>
      <PokemonHeaderCont name={toCapitalCase(pokemon.name)} id={pokemon.id}/>

      <CardContInfo>
        <img className="PokemonPlaceHolder" src={pokemon.image} alt="pokemon placeholder"/>

        <CardContentItems>
          <PokeType 
            bgColor={colors[pokemon.types[0]]}
          >
            {toCapitalCase(pokemon.types[0])}
          </PokeType>
          {
            pokemon.types[1] !== undefined
              ?
                <PokeType 
                  bgColor={colors[pokemon.types[1]]}
                >
                  {toCapitalCase(pokemon.types[1])}
                </PokeType>
              : null
          }
        </CardContentItems>

        <CardStt color={colorBase}>About</CardStt>

        <PokemonAboutCont 
          pokeWeight={pokemon.weight / 10} 
          pokeHeight={pokemon.height / 10}
          abilities={pokemon.abilities} 
        /> 

        <CardStt color={colorBase}>Base Stats</CardStt>

        <div>
          <PokemonStatsCont color={colorBase} stat="HP" statValue={pokemon.stats.hp}/>
          <PokemonStatsCont color={colorBase} stat="ATK" statValue={pokemon.stats.attack}/>
          <PokemonStatsCont color={colorBase} stat="DEF" statValue={pokemon.stats.defense}/>
          <PokemonStatsCont color={colorBase} stat="SATK" statValue={pokemon.stats.specialAttack}/>
          <PokemonStatsCont color={colorBase} stat="SDEF" statValue={pokemon.stats.specialDefense}/>
          <PokemonStatsCont color={colorBase} stat="SPD" statValue={pokemon.stats.speed}/>
        </div>
      </CardContInfo>
    </CardContainer>
  )
}

export { PokemonCard }