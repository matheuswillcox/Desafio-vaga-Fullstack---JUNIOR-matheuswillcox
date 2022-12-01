import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.pinkSchema ? "var(--pink)" : "var(--grey)")};
  color: white;
  width: 324px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid var(--black);
  font-size: 16px;
  margin-top: 16px;

  :hover {
    cursor: pointer;
  }
`;
