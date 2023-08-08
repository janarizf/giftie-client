import React from "react";
import { Container, StyledButton } from "./Head.styled";
import { Typography } from "../../../../../shared";
import { PlusCircleFill } from "react-bootstrap-icons";
import { COLORS } from "../../../../../constants/COLORS";

const Head = () => {
  return (
    <Container>
      <Typography fontWeight='bold' color={COLORS.PRIMARY} fontSize={24}>
        6 Lists
      </Typography>
      <StyledButton>
        <PlusCircleFill size='20px' />
        Add New List
      </StyledButton>
    </Container>
  );
};

export default Head;
