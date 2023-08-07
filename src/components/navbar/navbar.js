import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavbarMain = () => {
    const [user, setUser] = useState(true);
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
        if (localStorage.getItem('user') != 'undefined') {
            setUser(JSON.parse(localStorage.getItem('user')));
            isLoggedin = JSON.parse(localStorage.getItem('user'));
        }

    }, [location]);
    var isLoggedin = user;
    return (

        <Navbar expand="lg">
            <Navbar.Brand href="/home"><img src={require('../../img/giftie_logo.png')} weign="40" height="40" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Col ></Col>
                <Col xs={8}>
                    <Nav className="me-auto m-2">
                        <Link className="nav-link" to={'/home'}>
                            Home
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
                        <Link className="nav-link" to={'/help'}>
                            Help
                        </Link>
                        <Link className="nav-link" to={'/account'}>
                            Account
                        </Link>

                    </Nav>
                </Col>
                <Col>
                    <Nav className="me-auto m-2">
                        {/* <Link className="nav-link" to={'/list'} ><PlusCircle color="gray" /> Create a list</Link> */}
                        {isLoggedin == null && <Link className="nav-link" to={'/login'}>
                            Login
                        </Link>}
                        {isLoggedin && isLoggedin.name == "Guest" && <Link className="nav-link" to={'/signup'}>Signup</Link>}
                        {isLoggedin && isLoggedin.name != "Guest" &&
                            <Button className="nav-link" variant="link" onClick={logout} > Sign Out</Button>}
                        {isLoggedin &&
                            <Image src={user.photo} roundedCircle width="50px" height="50px" />}
                    </Nav>
                </Col>
            </Navbar.Collapse>
        </Navbar>

    )
};
export default NavbarMain;