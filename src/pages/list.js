import React, { Component } from "react";
import { Card, Button, Nav, Container, Modal} from 'react-bootstrap';
import ListCreate from './listcreate'
export default class List extends Component {
    state = {
        ModalShow: false
      }
      openModal = () => this.setState({ ModalShow: true });
      closeModal = () => this.setState({ ModalShow: false });
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Wishcart.</h1>
                        <p class="lead">Always there for you to manage and</p>
                        <p>organize for any occasion.</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Go to my list</a><br/>
                        <a class="btn btn-primary btn-lg" href="#" onClick={this.openModal}>Add new List</a>
                    </div>
                </div>
                <Container>
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