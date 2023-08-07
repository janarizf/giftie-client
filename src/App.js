import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Help from './pages/help'
import About from './pages/about'
import Blog from './pages/blog'
import Account from './pages/account';
import Gift from './pages/giftideas';
import GroupsEdit from "./components/groups/edit-group.component"
import ListEdit from './pages/list-edit';
import Login from './components/login/login.component';
import SignUp from './components/login/signup.component';
import Footer from './components/footer';
import NavbarMain from './components/navbar/navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Container className="main p-0">
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<Account />} />
          <Route path="/list/:id/item/:id" element={<ListEdit />} />
          <Route path="/list/:id" element={<ListEdit />} />
          <Route path="/groups/:id" element={<GroupsEdit />} />
          <Route path="/groups/:id/invite" element={<GroupsEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/invitelogin/:id" element={<Login />} />
          <Route path="/invitesignup/:id" element={<SignUp />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}