import React, { Component } from "react";
import { Card, Button, Nav, Container, Modal, Row, Col, Image, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from "../components/lists/add-item.component";
import ListView from "../components/lists/view-list.component";
import CreateList from "../components/lists/create-list.component"
import { PlusCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import listsService from "../services/lists.service";
export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false
        }
    }

    openModal = () => this.setState({ modalShow: true });
    closeModal = () => this.setState({ modalShow: false });

    render() {
        return (
            <div>
                <Container>
                    <div className="jumbotron jumbotron-fluid">
                        <CreateList />
                    </div>
                    <Card >
                        <Card.Body>
                            <Row>
                                <Col><Nav variant="tabs" defaultActiveKey="#lists">
                                    <Nav.Item>
                                        <Nav.Link href="#">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#lists">Lists</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#groups">Group</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#settings">Settings</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col></Col>
                                <Col>
                                    <Link className="nav-link" to={'/list'} onClick={this.openModal}><PlusCircle color="gray" /> Add items</Link>
                                </Col>
                            </Row>

                            <ListView />

                        </Card.Body>
                    </Card>

                    <Modal show={this.state.modalShow} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add an item to your list</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><AddItem /></Modal.Body>
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