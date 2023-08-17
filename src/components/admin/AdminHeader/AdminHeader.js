import React from "react";
import { Typography } from "../../../shared/elements";
import { Navbar, Offcanvas } from "react-bootstrap";
import {
  Header,
  StyledNav,
  StyledNavDropdown,
  Logo
} from "./AdminHeader.styled";
import {
  ADMIN_SIDEBAR_ITEMS,
  MARKETING_SUB_MENUS
} from "./../../../constants/ADMIN_SIDEBAR_ITEMS";
import { BoxArrowLeft } from "react-bootstrap-icons";
import logo from "../../../img/giftie_logo.png";

const AdminHeader = ({ activeNav, setActiveNav }) => {
  return (
    <React.Fragment>
      <Header key={false} expand={false}>
        <Navbar.Brand href='#'>
          <Typography component='h1'>{activeNav}</Typography>
        </Navbar.Brand>
        <Navbar.Toggle
          className='d-none d-sm-block'
          aria-controls={`offcanvasNavbar-expand-${false}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement='end'
          style={{ padding: "10px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              <Logo src={logo} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <StyledNav activeKey={activeNav}>
              {ADMIN_SIDEBAR_ITEMS.map((item, index) => {
                return item.name === "Marketing" ? (
                  <StyledNavDropdown
                    key={`${item.name}`}
                    active={activeNav === item.name}
                    title={
                      <React.Fragment>
                        {item.icon} {item.name}
                      </React.Fragment>
                    }
                    disabled={item.disabled}
                  >
                    {MARKETING_SUB_MENUS.map((subItem) => {
                      return (
                        <StyledNavDropdown.Item
                          key={`${item.name}--${subItem.name}`}
                          href={subItem.link}
                          disabled={subItem.disabled}
                        >
                          {subItem.name}
                        </StyledNavDropdown.Item>
                      );
                    })}
                  </StyledNavDropdown>
                ) : (
                  <StyledNav.Link
                    key={`${item.name}`}
                    href={item.link}
                    disabled={item.disabled}
                    active={activeNav === item.name}
                  >
                    {item.icon}
                    {item.name}
                  </StyledNav.Link>
                );
              })}
              <StyledNav.Link href='#' disabled={false}>
                <BoxArrowLeft width='15px' />
                Logout
              </StyledNav.Link>
            </StyledNav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Header>
    </React.Fragment>
  );
};

export default AdminHeader;
