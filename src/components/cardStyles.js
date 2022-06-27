import styled from "styled-components"
import { colors } from "../data/colors"

// COMPONENTS 
export const CardP = styled.p`
  font-size: 0.625rem;
  font-weight: ${props => props.weight ? "bold" : "normal"};
  color: ${props => props.color ?? colors["wireframe"]};
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

// JUST CONTAINERS
export const CardContainer = styled.div`
  position: relative;
  width: 22.5em;
  padding: 1.5em 0.25em 0.25em 0.25em;
  border-radius: 0.75em;
  background: ${props => props.bgColor ?? colors["wireframe"]};

  &::before {
    content: "";
    position: absolute;
    width: 208px;
    height: 208px;
    background: url("../pokeball.png");
    background-size: cover;
    top: 0.5em;
    right: 0.5em;
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

  .PokemonPlaceHolder {
    width: 200px;
    position: absolute;
    top: -144px;
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

// COMPLEX CONTAINERS
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .CardAboutInfo__Subitem {
    display: flex;
    align-items: center;
    padding: 0.625em 0 0.625em 0;
    gap: 0.5em;
    
    &--text {
      height: 36px;
      justify-content: center;
    }
  }

  .CardAboutInfo__Text {
    font-size: 0.5rem;
    color: ${colors["mediumGray"]};
    text-align: center;
  }
`

export const CardStatsCont = styled.div`
  display: flex;
  justify-content: end;

  .PokemonStatsCont__Fill {
    display: flex;
    align-items: center;
    border-left: 1px solid #E0E0E0;
    margin-left: 0.75em;
    padding-left: 0.75em;
  }

  .PokemonStatsCont__Fill p {
    width: 26.3px;
    padding-right: 0.75em;
  }
`

export const CardFiller = styled.div`
  position: relative;
  height: 0.25em;
  width: ${props => props.total ?? 231}px;
  border-radius: 0.25em;
  background: #E0E0E0;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    height: 0.25em;
    width: ${props => props.num ?? 45}px;
    background: ${props => props.bgColor ?? colors["wireframe"]};
  }
`