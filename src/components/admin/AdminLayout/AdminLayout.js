import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { Content, MainContainer, Wrapper } from "./AdminLayout.styled";

const AdminLayout = ({ children }) => {
  return (
    <MainContainer fluid>
      <Wrapper>
        <AdminSidebar />
        <Content>
          <AdminHeader />
          {children}
        </Content>
      </Wrapper>
    </MainContainer>
  );
};

export default AdminLayout;
