import React from "react";
import { Container, AddNewTheme, ThemeItem } from "./List.styled";
import { PlusLg } from "react-bootstrap-icons";
import { Typography } from "../../../../shared/elements";
import { COLORS } from "../../../../constants/COLORS";

const List = () => {
  return (
    <Container>
      <AddNewTheme>
        <PlusLg size={"24px"} color={COLORS.SECONDARY} />
        <Typography color={COLORS.SECONDARY} fontWeight='bold'>
          Add New Theme
        </Typography>
      </AddNewTheme>
      {Array.from({ length: 12 }, (_, index) => {
        return <ThemeItem />;
      })}
    </Container>
  );
};

export default List;
