import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Help from './pages/help'
import About from './pages/about'
import Blog from './pages/blog'
import List from './pages/list';
import Gift from './pages/giftideas';
import ListEdit from './pages/list-edit';
import Login from './components/login/login.component';
import SignUp from './components/login/signup.component';
import Footer from './components/footer';
import NavbarMain from './components/navbar/navbar';
class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <Container>
          <NavbarMain />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/list" element={<List />} />
            <Route path="/list/:id" element={<ListEdit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    )
  }
}

export default App;