import styled from "styled-components";

export const ContainerS = styled.div`
  width: min(1120px, 90%);
  margin: auto;
  padding: 1em 0;

  @media (max-width: 480px) {
    width: 100%;
    padding: 3.5em 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`