import { ControlButtonS } from "./controls.style";

export default function ControlButton({ direction, idPokemon, getPokemon }) {
  const handleOnClick = () => {

    if (direction === "left" && idPokemon > 1) {
      getPokemon(idPokemon - 1);
    } 
    if (direction === "right" && idPokemon <= 897) {
      getPokemon(idPokemon + 1);
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
        ? <img src="/leftArrow.png" alt="left" />
        : <img src="/rightArrow.png" alt="right" />
      }
    </ControlButtonS>
  )
}