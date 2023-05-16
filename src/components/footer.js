import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <Container className="footer p-5">
            <Row>
                <Col>
                    <Row>
                        <Col><Link className="nav-link" to={'/account'}>
                            My List
                        </Link></Col>
                        <Col><Link className="nav-link" to={'/blog'}>
                            Blogs
                        </Link></Col>
                        <Col><Link className="nav-link" to={'/about'}>
                            Referrals
                        </Link></Col>
                        <Col><Link className="nav-link" to={'/about'}>
                            About Us
                        </Link></Col>
                        <Col><Link className="nav-link" to={'/help'}>
                            Contact Us
                        </Link></Col>
                    </Row>
                    <Row>
                        <span>Subscribe for more updates</span>
                    </Row>
                    <Form className="custom-search">

                        <Form.Control
                            className="custom-search-input"
                            type="search"
                            placeholder="Enter email"
                            aria-label="Search"
                        />
                        <Button className="custom-search-botton">Subscribe</Button>

                    </Form>
                    <Row>
                        <span>Giftie | 2022 | Terms & Conditions | Privacy Policy</span>
                    </Row>
                </Col>

                <Col>
                    <img src={require('../img/giftie_icon_white.png')} title="Giftie" alt="Giftie" className="float-md-end" height="auto" />
                </Col>
            </Row>

        </Container>
    )
}
export default Footer;