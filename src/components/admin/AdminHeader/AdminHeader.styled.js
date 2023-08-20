import { styled } from "styled-components";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { COLORS } from "../../../constants/colors";

export const Header = styled(Navbar)`
  background-color: transparent;

  & .navbar-toggler {
    border: none;
    padding: 0;
  }

  &.navbar {
    justify-content: unset;
    gap: 20px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: 0.2s;

  & a {
    display: flex;
    gap: 7px;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: 0.7;

    &.disabled {
      opacity: 0.4;
    }

    &:last-child {
      margin-top: auto;
    }

    &:hover {
      background-color: transparent;
      opacity: 1;
    }

    &.active {
      opacity: 1;
      &:after {
        content: "";
        height: 85%;
        width: 5px;
        background: ${COLORS.WHITE};
        border-radius: 5px;
        margin-left: auto;
        margin-right: -5px;
      }
    }
  }
`;

export const StyledNavDropdown = styled(NavDropdown)`
  & .dropdown-toggle::after {
    margin: 0 20px 0 auto;
  }

  & .dropdown-menu {
    position: relative !important;
    inset: unset !important;
    transform: unset !important;
    background: transparent;
    border: none;
    margin-left: 20px;
    transition: all 0.3s ease-out;
    padding: 0;
  }
`;
