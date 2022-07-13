import styled from "styled-components";

export const ContainerS = styled.div`
  position: relative;
  width: min(1120px, 90%);
  margin: auto;
  padding: 3em 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 100%;
    padding: 3.5em 0;
  }
`