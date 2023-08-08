import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/COLORS";
import { Dropdown } from "react-bootstrap";

export const StyledDropdown = styled(Dropdown)`
  width: 200px;

  & .btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    border-color: ${COLORS.DARK_GRAY};

    &.show,
    &:first-child:active {
      background-color: ${COLORS.PRIMARY}!important;
      border-color: ${COLORS.PRIMARY};
      color: ${COLORS.WHITE};
    }
  }

  & .dropdown-item:active {
    background-color: ${COLORS.PRIMARY}!important;
    border-color: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
  }
`;

const Select = ({ children, ...props }) => {
  return <StyledDropdown {...props}>{children}</StyledDropdown>;
};

export default Select;
