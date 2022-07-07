import styled from "styled-components";
import { colors } from "@data/colors";

export const HeaderS = styled.header`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 2px 2px ${colors["fighting"]+"70"};

  & > div {
    display: flex;
    padding: 0.25em 0;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    & > div {
      padding: .25em 1.5em;
      gap: .5em;
    }
  }

  .logo {
    width: 4em;
    
    @media (max-width: 480px) {
      width: 3em;
    }
  }

  .inputS {
    padding: 0.35em 0.5em;
    outline: none;
    border: 1px solid #ccc;
  }
  .inputS + button {
    font-weight: 600;
    color: ${colors["lightGray"]};
    padding: 0.35em 0.5em;
    background: ${colors["fighting"]};
    border: 1px solid ${colors["fighting"]};

    &:hover {
      background-color: ${colors["fighting"]+"70"};
      border-color: ${colors["fighting"]+"70"};
    }
  }  
`