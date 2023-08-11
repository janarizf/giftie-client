import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

export const StyledButton = styled.button`
  width: 100%;
  background: ${(props) => props.$bgColor || COLORS.PRIMARY};
  border: none;
  height: ${(props) => props.$height || 42}px;
  border-radius: 5px;
  color: ${(props) => props.$textColor || COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: ${(props) => props.$textSize || 16}px;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
