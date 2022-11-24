import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavbarMain = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    //const classes = useStyles();

    const logout = () => {
        dispatch({ type: "LOGOUT" });

        // history.push('/auth');
        localStorage.setItem('user', null);
        setUser(null);
        navigate('/');
    }

    useEffect(() => {
     
        setUser(JSON.parse(localStorage.getItem('user')));
       
    }, [location]);
    const isLoggedin = user;
    return (

        <Navbar expand="lg" variant="light" >
            <Navbar.Brand href="/home"><img src={require('../../img/giftie_logo.png')} weign="40" height="40" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Col ></Col>
                <Col xs={8}>
                    <Nav className="me-auto">
                        <Nav.Link href={'/home'}>
                            Home
                        </Nav.Link>
                        <Link className="nav-link" to={'/help'}>
                            Help
                        </Link>
                        <Link className="nav-link" to={'/gift'}>
                            Gift Ideas
                        </Link>
                        <Link className="nav-link" to={'/about'}>
                            About Us
                        </Link>
                        <Link className="nav-link" to={'/blog'}>
                            Blog
                        </Link>
                        {isLoggedin &&   <Link className="nav-link" to={'/list'}>
                            Account
                        </Link>}

                    </Nav>
                </Col>
                <Col>
                    <Nav>
                        {/* <Link className="nav-link" to={'/list'} ><PlusCircle color="gray" /> Create a list</Link> */}
                        {isLoggedin == null && <Link className="nav-link" to={'/login'}>
                            Login
                        </Link>}

                        {isLoggedin && 
                            <Button className="nav-link" variant="link" onClick={logout} > Sign Out</Button>}
                        {isLoggedin &&
                            <Image src={user.photo} roundedCircle thumbnail width="50x" />}
                    </Nav>
                </Col>
            </Navbar.Collapse>
        </Navbar>

    )
};
export default NavbarMain;