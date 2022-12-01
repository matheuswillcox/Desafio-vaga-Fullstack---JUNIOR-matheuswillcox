import { Container } from "./styles";

const Button = ({ children, type = "button", pinkSchema = false, ...rest }) => {
  return (
    <Container pinkSchema={pinkSchema} type={type} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
