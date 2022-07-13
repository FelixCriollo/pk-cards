import styled from "styled-components"

export const PokemonControlS = styled.div`
  position: absolute;
  top: 36%;
`

export const ControlButtonS = styled.button`
  transform: translateX(${props => props.direction === "left"? "-130px" : "130px"});
  border: none;
  background-color: transparent;
  opacity: ${ props => {
      if (props.direction === "left") {
        return props.idPokemon === 1 ? "0" : "1";
      } else {
        return props.idPokemon === 898 ? "0" : "1";
      }
  }};
  
  @media (max-width: 480px) {
    transform: translateX(${props => props.direction === "left"? "-100px" : "100px"});
  }
`