import React, { useState } from "react";
import { Container } from "./Themes.styled";
import Header from "./Header/Header";
import List from "./List/List";

const Themes = () => {
  const [categoryFilter, setCategoryFilter] = useState("Default");
  return (
    <Container>
      <Header
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <List />
    </Container>
  );
};

export default Themes;
