import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type BUttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<BUttonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;