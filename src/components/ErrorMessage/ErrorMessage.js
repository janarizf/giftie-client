import React from "react";
import { Container } from "./ErrorMessage.styled";
import { Typography } from "../../shared/elements";
import { COLORS } from "../../constants/colors";

const ErrorMessage = ({ errorMessage }) => {
  if (!errorMessage) return <React.Fragment />;
  else
    return (
      <Container>
        <Typography color={COLORS.DANGER} fontSize={14}>
          {errorMessage}
        </Typography>
      </Container>
    );
};

export default ErrorMessage;
