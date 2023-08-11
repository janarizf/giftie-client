import React, { useEffect, useState } from "react";
import {
  Sidebar,
  StyledNavDropdown,
  StyledNav,
  Logo
} from "./AdminSidebar.styled";
import {
  ADMIN_SIDEBAR_ITEMS,
  MARKETING_SUB_MENUS
} from "../../../constants/ADMIN_SIDEBAR_ITEMS";
import { BoxArrowLeft } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const location = useLocation();

  useEffect(() => {
    const active = ADMIN_SIDEBAR_ITEMS.find((item) =>
      item.baseUrl.includes(location.pathname)
    );
    if (active) {
      setActiveNav(active.name);
    }
  }, [location.pathname]);

  return (
    <Sidebar>
      <Logo />
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
    </Sidebar>
  );
};

export default AdminSidebar;
