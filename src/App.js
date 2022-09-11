import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown, Modal, Button,Badge } from 'react-bootstrap';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './login/login.component'
import SignUp from './login/signup.component'
import Home from './pages/home'
import Help from './pages/help'
import About from './pages/about'
import Blog from './pages/blog'
import List from './pages/list';
import ListCreate from './pages/listcreate'
import Footer from './components/footer';
class App extends Component {
  state = {
    ModalShow: false
  }
  openModal = () => this.setState({ ModalShow: true });
  closeModal = () => this.setState({ ModalShow: false });

  render() {

    return (
      <Router>
        <header>
          <Navbar expand="lg" className='color-nav' variant="dark">
            <Container>
              <Navbar.Brand href="#home">WishCart</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                  <Link className="nav-link" to={'/home'}>
                    Home
                  </Link>
                  <NavDropdown title="Features" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link className="nav-link" to={'/list'}>List</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  </NavDropdown>
                  <Link className="nav-link" to={'/about'}>
                    About Us
                  </Link>
                  <Link className="nav-link" to={'/blog'}>
                    Blog
                  </Link>
                  <Link className="nav-link" to={'/help'}>
                    Help
                  </Link>
                  <Link className="nav-link" to={'/list'}>
                    Account
                  </Link>
                </Nav>
                <Nav>
                  <Link className="nav-link" to={'/list'} onClick={this.openModal}>List</Link>
                  <Link className="nav-link" to={'/list'}>Notif<Badge bg="secondary">9</Badge>
                    <span className="visually-hidden">unread messages</span></Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <div>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />

              <Route path="/home" element={<Home />} />
              <Route path="/help" element={<Help />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/list" element={<List />} />
            </Routes>

          </div>
          <Modal show={this.state.ModalShow} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add an item to your list</Modal.Title>
            </Modal.Header>
            <Modal.Body><ListCreate /></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </main>
        <footer>
          <Footer />
        </footer>

      </Router>


    )
  }
}

export default App;