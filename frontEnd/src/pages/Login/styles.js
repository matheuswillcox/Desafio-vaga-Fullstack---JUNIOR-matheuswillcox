import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100vw;

  h1 {
    color: var(--pink);
    font-family: "Inter", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .boxForm {
    width: 369px;
  }

  .registerMessage {
    margin-top: 40px;
    color: var(--grey);
  }
`;
