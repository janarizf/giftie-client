import React from "react";
import { Container } from "./Header.styled";
import { Typography, Select } from "../../../../shared/elements";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Typography fontSize={14} fontWeight='bold'>
        All Themes
      </Typography>
      <Select>
        <Dropdown.Toggle id='dropdown-autoclose-true'>Birthday</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item key={"Birthday"}>{"Birthday"}</Dropdown.Item>
        </Dropdown.Menu>
      </Select>
    </Container>
  );
};

export default Header;
