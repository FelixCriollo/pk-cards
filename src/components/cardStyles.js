import styled from "styled-components"
import { colors } from "../data/colors"

export const CardP = styled.p`
  font-size: 0.625rem;
  font-weight: ${props => props.weight ? "bold" : "regular"};
  color: ${colors["darkGray"]};
  text-align: justify;
` 

export const CardStt = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${props => props.color ?? colors["wireframe"]};
  margin: 0 auto;
` 

export const CardT = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
` 

export const CardId = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
`

export const PokeType = styled.p`
  font-size: 0.625rem;
  font-weight: bold;
  color: #fff;
  padding: 0.2em 0.8em;
  border-radius: 0.625rem;
  background-color: ${props => props.bgColor ?? colors["mediumGray"]};
`

export const CardContainer = styled.div`
  width: 22.5em;
  padding: 1.5em 0.25em 0.25em 0.25em;
  border-radius: 0.75em;
  background-color: ${props => props.bgColor ?? colors["wireframe"]};
  `
export const CardContInfo = styled.div`
  width: 100%;
  height: 25.75em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 3.5em 1.25em 0 1.25em;
  border-radius: 0.5em;
  background-color: #fff;
`

export const CardAboutInfo = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  .CardAboutInfo__Item  {
    padding: 0 1.5em 0 1.5em;

    &:first-child {
      padding-left: 0;
      border-right: 1px solid ${colors["lightGray"]};
    }
    
    &:last-child {
      padding-right: 0;
      border-left: 1px solid ${colors["lightGray"]};
    }

    &--text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .CardAboutInfo__Subitem {
    display: flex;
    padding: 0.625em 0 0.625em 0;
    gap: 0.5em;

    &--text {
      display: block;
    }
  }

  .CardAboutInfo__Text {
    font-size: 0.5rem;
    color: ${colors["mediumGray"]};
    text-align: center;
  }
`
