import styled from "styled-components"
import { colors } from "@data/colors"

export const CardContainer = styled.div`
  position: relative;
  width: 22.5em;
  padding: 1.5em 0.25em 0.25em 0.25em;
  border-radius: 0.75em;
  background: ${props => props.bgColor ?? colors["wireframe"]};
  box-shadow: 0px 0px .5em .1em rgba(0,0,0,0.5);

  &::before {
    content: "";
    position: absolute;
    width: 13em;
    height: 13em;
    background: url("../pokeball.png");
    background-size: cover;
    top: 0.5em;
    right: 0.5em;
  }

  @media (max-width: 480px) {
    font-size: 0.82rem;
  }
`

export const CardContInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 3.5em 1.25em 1.75em 1.25em;
  border-radius: 0.5em;
  background-color: #fff;

  .PokemonImage {
    width: 12.5em;
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
  }
`
export const CardContentItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10.5em;
  padding: 0 1.25em;
`

