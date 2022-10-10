import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown, Modal, Button,Badge, Col } from 'react-bootstrap';
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
import { Plus, PlusCircle } from 'react-bootstrap-icons';
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
          <Navbar expand="lg" variant="light">
          <Container>
          <Col>
              <Navbar.Brand href="/"><img src={require('./img/wishcart_logo.png')} weign="40" height="40"/></Navbar.Brand>
          </Col>
              <Col>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className="nav-link" to={'/home'}>
                    Home
                  </Link>
                  <Link className="nav-link" to={'/help'}>
                    Help
                  </Link>
                  <Link className="nav-link" to={'/about'}>
                    Gift Ideas
                  </Link>
                  <Link className="nav-link" to={'/about'}>
                    About Us
                  </Link>
                  <Link className="nav-link" to={'/blog'}>
                    Blog
                  </Link>
                  <Link className="nav-link" to={'/list'}>
                    Account
                  </Link>
                </Nav>
                </Navbar.Collapse>
                </Col>
                <Col style={{display:'flex', justifyContent:'right'}}>
               
                <Nav>
                  <Link className="nav-link" to={'/list'} onClick={this.openModal}><PlusCircle color="gray" /> Create a list</Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Col>
               </Container>
          </Navbar>
        </header>
        <main>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
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