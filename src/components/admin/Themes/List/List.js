import React, { useState } from "react";
import { Container, AddNewTheme, ThemeItem } from "./List.styled";
import { PlusLg } from "react-bootstrap-icons";
import { Typography } from "../../../../shared/elements";
import { COLORS } from "../../../../constants/colors";
import AddThemeModal from "./AddThemeModal/AddThemeModal";

const List = () => {
  const [isAddThemeModalOpen, setIsAddThemeModalOpen] = useState(false);
  return (
    <Container>
      <AddNewTheme onClick={() => setIsAddThemeModalOpen(true)}>
        <PlusLg size={"24px"} color={COLORS.SECONDARY} />
        <Typography color={COLORS.SECONDARY} fontWeight='bold'>
          Add New Theme
        </Typography>
      </AddNewTheme>
      {Array.from({ length: 12 }, (_, index) => {
        return <ThemeItem />;
      })}
      <AddThemeModal
        open={isAddThemeModalOpen}
        onClose={() => setIsAddThemeModalOpen(false)}
      />
    </Container>
  );
};

export default List;
