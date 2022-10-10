import React from "react";
import { Container, Row, Col, Breadcrumb, Form, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
        <Container className="footer" fluid="md">
              <Row>
                <Col>
                <img src={require('../img/wishcart_logo_white.png') }  width="30%" height="auto"/>
                </Col>
                <Col>
                Subscribe for more updates
                </Col>
            </Row>
            <Row>
            <Col>
            <Breadcrumb>
            <Breadcrumb.Item href="#">My List</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Blogs </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Referrals</Breadcrumb.Item>
            <Breadcrumb.Item href="#">About Us</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Contact Us</Breadcrumb.Item>
            </Breadcrumb>
          
            </Col>
                <Col>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Enter email"
                    className="me-2"
                    aria-label="EnterEmail"
                    />
                    <Button variant="flat">Subscribe</Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                <span>&copy;WishCart 2022</span>
                </Col>
                <Col>
                <Breadcrumb >
                <Breadcrumb.Item href="#">Terms & Conditions</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Privacy Policy</Breadcrumb.Item>
                </Breadcrumb>
                </Col>
            </Row>
          
        </Container>
    )
}
export default Footer;