import { styled } from "styled-components";
import { Nav, NavDropdown } from "react-bootstrap";
import { COLORS } from "../../../constants/COLORS";
import { GiftieLogo } from "../../../components";

export const Sidebar = styled.div`
  width: 250px;
  background-color: ${COLORS.PRIMARY};
  padding: 30px 0 30px 45px;
  border-radius: 5px;

  & a {
    color: white;
    text-decoration: none;
    padding: 10px;
    display: block;

    &:hover {
      background-color: #555;
    }
  }
`;

export const Logo = styled(GiftieLogo)`
  width: 140px;
  height: auto;
  margin-bottom: 35px;
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
  height: 80vh;
  transition: 0.2s;

  & a {
    color: ${COLORS.WHITE};
    display: flex;
    gap: 7px;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: 0.7;

    &.disabled {
      color: ${COLORS.WHITE};
      opacity: 0.4;
    }

    &:last-child {
      margin-top: auto;
    }

    &:hover {
      background-color: transparent;
      color: ${COLORS.WHITE};
      opacity: 1;
    }

    &:focus {
      color: ${COLORS.WHITE};
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
