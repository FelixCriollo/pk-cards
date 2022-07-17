import { ControlButtonS } from "./controls.style";
import { ArrowLeft, ArrowRight } from "../svg";

export default function ControlButton({ direction, idPokemon, getPokemon, setIdPokemon }) {
  const handleOnClick = () => {

    if (direction === "left" && idPokemon > 1) {
      getPokemon(idPokemon - 1);
      setIdPokemon(idPokemon - 1)
    } 
    if (direction === "right" && idPokemon <= 897) {
      getPokemon(idPokemon + 1);
      setIdPokemon(idPokemon + 1)
    }

  }

  return (
    <ControlButtonS
      onClick={() => handleOnClick()}
      direction={direction}
      idPokemon={idPokemon}
    >
      {
        direction === "left"
        ? <ArrowLeft />
        : <ArrowRight />
      }
    </ControlButtonS>
  )
}