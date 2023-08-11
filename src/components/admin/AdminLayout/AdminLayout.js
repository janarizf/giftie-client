import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import {
  ContentWrapper,
  Content,
  MainContainer,
  Wrapper
} from "./AdminLayout.styled";

const AdminLayout = ({ children }) => {
  return (
    <MainContainer fluid>
      <Wrapper>
        <AdminSidebar />
        <ContentWrapper>
          <AdminHeader />
          <Content>{children}</Content>
        </ContentWrapper>
      </Wrapper>
    </MainContainer>
  );
};

export default AdminLayout;
