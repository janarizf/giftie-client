import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledH1 = styled.h1`
  color: ${(props) => props.$color || COLORS.BLACK};
  font-size: ${(props) => props.$fontSize || 16}px;
  font-weight: ${(props) => props.$fontWeight || "normal"};
  margin: ${(props) => props.$customMargin || 0};
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.$color || COLORS.BLACK};
  font-size: ${(props) => props.$fontSize || 16}px;
  font-weight: ${(props) => props.$fontWeight || "normal"};
  margin: ${(props) => props.$customMargin || 0};
`;

const Typography = ({
  component = "p",
  children,
  fontSize = 16,
  color = COLORS.BLACK,
  fontWeight = "normal",
  customMargin,
  ...props
}) => {
  return (
    <React.Fragment>
      {component === "h1" ? (
        <StyledH1
          $fontSize={fontSize}
          $color={color}
          $fontWeight={fontWeight}
          $customMargin={customMargin}
          {...props}
        >
          {children}
        </StyledH1>
      ) : (
        <StyledParagraph
          $fontSize={fontSize}
          $color={color}
          $fontWeight={fontWeight}
          $customMargin={customMargin}
          {...props}
        >
          {children}
        </StyledParagraph>
      )}
    </React.Fragment>
  );
};

export default Typography;
