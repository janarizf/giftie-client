import React, { useState } from "react";
import { Container } from "./Themes.styled";
import Header from "./Header/Header";
import List from "./List/List";

const Themes = () => {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  );
};

export default Themes;
