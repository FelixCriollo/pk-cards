import styled from "styled-components"
import { colors } from "@data/colors"

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
  width: ${props => props.total ?? 14.4375}em;
  border-radius: 0.25em;
  background: #E0E0E0;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    height: 0.25em;
    width: ${props => props.num * 0.0625 ?? 2.8125}em;
    background: ${props => props.bgColor ?? colors["wireframe"]};
  }
`