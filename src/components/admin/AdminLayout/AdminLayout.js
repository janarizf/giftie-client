import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import {
  ContentWrapper,
  Content,
  MainContainer,
  Wrapper
} from "./AdminLayout.styled";

const AdminLayout = ({ children }) => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <MainContainer fluid>
      <Wrapper>
        <AdminSidebar setActiveNav={setActiveNav} activeNav={activeNav} />
        <ContentWrapper>
          <AdminHeader activeNav={activeNav} setActiveNav={setActiveNav} />
          <Content>{children}</Content>
        </ContentWrapper>
      </Wrapper>
    </MainContainer>
  );
};

export default AdminLayout;
