import React from "react";
import { Container, ContainerItemWrapper } from "./Head.styled";
import { Typography } from "../../../../shared/elements";
import { Form } from "react-bootstrap";

const Head = () => {
  return (
    <Container>
      <ContainerItemWrapper>
        <Typography fontWeight='bold'>Convert Link</Typography>
        <Form.Control type='text' placeholder='Paste link' />
      </ContainerItemWrapper>
      <Typography>—</Typography>
      <ContainerItemWrapper>
        {" "}
        <Typography fontWeight='bold'>Admin Link</Typography>
        <Form.Control type='text' placeholder='Your new link' />
      </ContainerItemWrapper>
    </Container>
  );
};

export default Head;
