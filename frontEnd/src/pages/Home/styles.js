import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  header {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
  h1 {
    color: var(--pink);
  }
  button {
    border: none;
    width: 55px;
    height: 30px;
    background-color: var(--grey3);
    color: white;
  }
  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  span {
    color: var(--grey);
  }
  .buttonAdd {
    width: 32px;
    height: 32px;
  }
  ul {
    width: 80%;
    background-color: var(--grey3);
    padding: 20px;
  }
  li {
    background-color: black;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div1 {
  }
  .div2 {
    justify-content: end;
    color: var(--grey);
  }
`;
