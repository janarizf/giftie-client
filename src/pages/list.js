import React, { Component } from "react";
import { Card, Button, Nav, Container, Modal, Row, Col, Image } from 'react-bootstrap';
import ListCreate from './listcreate'
import btnImg from '../img/img-placeholder.jpg'
export default class List extends Component {
    state = {
        ModalShow: false
    }
    openModal = () => this.setState({ ModalShow: true });
    closeModal = () => this.setState({ ModalShow: false });
    render() {
        return (
            <div>
                <Container>
                    <div class="jumbotron jumbotron-fluid">
                        <Row>
                            <Col sm>
                                <Button size="sm">
                                    <Image src={btnImg} rounded responsive width='200px' />
                                </Button>
                            </Col>
                            <Col sm>
                                <h4>My Wishlist</h4>
                            </Col>
                            <Col sm></Col>
                        </Row>
                    </div>
                    <Card >
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#items">
                                <Nav.Item>
                                    <Nav.Link href="#items">Items</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#groups">Group</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#settings">Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
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
                </Container>
            </div>
        );
    }
}