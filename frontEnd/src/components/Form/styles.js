import styled from "styled-components";

export const Styled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: var(--grey3);
  align-items: center;
  padding: 10px;
  gap: 20px;
  h2 {
    color: var(--white);
  }
  .inputBox {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .labelBox {
      width: 100%;
      text-align: start;
      label {
        color: var(--grey0);
      }
    }
    .errorMessage {
      height: 20px;
      font-size: 16px;
      color: var(--pink);
    }
  }
`;
