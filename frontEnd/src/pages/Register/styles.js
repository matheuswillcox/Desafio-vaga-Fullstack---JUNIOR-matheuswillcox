import styled from "styled-components";

export const Container = styled.div`
flex-direction: column;
display: flex;
align-items: center;

form{
  width: 500px;
}
  
  header {
    display: flex;
    align-items: center;
    gap: 200px;
    justify-content: space-between;
  }
  .button {
    border: none;
    width: 55px;
    height: 30px;
    background-color: var(--grey3);
    color: white;
    margin: 20px;
  }

  h1 {
    margin: 20px;
    color: var(--pink);
    font-family: "Inter", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`;
