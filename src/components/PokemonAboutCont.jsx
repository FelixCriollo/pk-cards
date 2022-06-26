import { CardAboutInfo } from "./cardStyles";
import { CardP } from "./cardStyles";
import weight from '../assets/weight.svg'
import height from '../assets/height.svg'

function PokemonAboutCont({
    pokeWeight = 9.9,
    pokeHeight = 9.9,
    abilities = ["Ability 1", "Ability 2"]
  }) {

  return (
    <CardAboutInfo>
      <div className="CardAboutInfo__Item">
        <div className="CardAboutInfo__Subitem">
          <img src={weight} alt="" aria-hidden="true"/>

          <CardP>{pokeWeight} kg</CardP>
        </div>
        
        <p className="CardAboutInfo__Text">Weight</p>
      </div>
      
      <div className="CardAboutInfo__Item">
        <div className="CardAboutInfo__Subitem">
          <img src={height} alt="" aria-hidden="true"/>

          <CardP>{pokeHeight} m</CardP>
        </div>
        
        <p className="CardAboutInfo__Text">Height</p>
      </div>

      <div className="CardAboutInfo__Item CardAboutInfo__Item--text">
        <div className="CardAboutInfo__Subitem--text">
          <CardP>{abilities[0]}</CardP>

          <CardP>{abilities[0]}</CardP>
        </div>
        
        <p className="CardAboutInfo__Text">Moves</p>
      </div>
    </CardAboutInfo>
  )
}

export { PokemonAboutCont }