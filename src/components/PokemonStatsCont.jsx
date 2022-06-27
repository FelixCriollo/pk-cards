import { zeroPad } from "../utils"
import { colors } from "../data/colors"
import { CardP, CardStatsCont, CardFiller } from "./cardStyles"

function PokemonStatsCont({
    stat = "HP", 
    statValue = 45, 
    color = "#B8B8B8" 
  }) {
  
  const valueF = zeroPad(statValue, 3) 

  return (
    <CardStatsCont>
      <CardP weight="bold" color={color}>{stat}</CardP>

      <div className="PokemonStatsCont__Fill">
        <CardP color={colors["darkGray"]}>{valueF}</CardP>

        <CardFiller bgColor={color}  num={statValue}/>
      </div>
    </CardStatsCont>
  ) 
}

export { PokemonStatsCont }