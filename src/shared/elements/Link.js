import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/COLORS";

export const StyledLink = styled.a`
  width: 100%;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.$color || COLORS.BLACK};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: ${(props) => props.$fontSize || 16}px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const Link = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Link;
