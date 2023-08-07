import React from "react";
import { styled } from "styled-components";
import { Form } from "react-bootstrap";

const StyledFormLabel = styled(Form.Label)`
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const FormInput = ({
  label = "",
  name = "",
  placeholder = "Type here",
  disabled = false,
  value = "",
  type = "text",
  ...props
}) => {
  return (
    <div>
      {label ? <StyledFormLabel>{label}</StyledFormLabel> : <React.Fragment />}
      <Form.Control
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        type={type}
        {...props}
      />
    </div>
  );
};

export default FormInput;
