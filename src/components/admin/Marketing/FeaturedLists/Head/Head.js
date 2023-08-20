import React from "react";
import { Container, StyledButton } from "./Head.styled";
import { Typography } from "../../../../../shared";
import { PlusCircleFill } from "react-bootstrap-icons";
import { COLORS } from "../../../../../constants/colors";
import { ROUTES } from "../../../../../constants/ROUTES";

const Head = () => {
  return (
    <Container>
      <Typography fontWeight='bold' color={COLORS.PRIMARY} fontSize={24}>
        6 Lists
      </Typography>
      <a
        href={ROUTES.ADMIN.FEATURED_LIST.CREATE}
        style={{ textDecoration: "none" }}
      >
        <StyledButton>
          <PlusCircleFill size='20px' />
          Add New List
        </StyledButton>
      </a>
    </Container>
  );
};

export default Head;
