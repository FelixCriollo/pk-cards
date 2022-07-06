import styled from "styled-components"
import { colors } from "@data/colors"

// COMPONENTS 
export const CardP = styled.p`
  font-size: 0.625em;
  font-weight: ${props => props.weight ? "bold" : "normal"};
  color: ${props => props.color ?? colors["wireframe"]};
  text-align: justify;
` 

export const CardStt = styled.h3`
  font-size: 0.875em;
  font-weight: bold;
  color: ${props => props.color ?? colors["wireframe"]};
  margin: 0 auto;
` 

export const CardT = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
` 

export const CardId = styled.h3`
  font-size: 0.75em;
  font-weight: bold;
  color: #fff;
`

export const PokeType = styled.p`
  font-size: 0.625em;
  font-weight: bold;
  color: #fff;
  padding: 0.2em 0.8em;
  border-radius: 0.625rem;
  background-color: ${props => props.bgColor ?? colors["mediumGray"]};
`