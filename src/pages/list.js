import React, { Component } from "react";
import { Card, Button, Nav, Container, Modal, Row, Col } from 'react-bootstrap';
import AddItem from "../components/lists/add-item.component";
import ListView from "../components/lists/view-list.component";
import Image from 'react-bootstrap/Image'

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            user: {}
        }

    }
    componentWillMount = () => {
        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
        })
        console.log(this.state.user);
        console.log(this.state.user.photo);
    }
    openModal = () => this.setState({ modalShow: true });
    closeModal = () => this.setState({ modalShow: false });

    render() {
        return (
            <Container>
               {this.state.user &&  <div className="jumbotron-profile p-5">
                    <Row sm={6} className="justify-content-md-center"> <Image src={this.state.user.photo} roundedCircle /></Row>
                    <Row sm={6} className="justify-content-md-center"><h4> {this.state.user.firstname}  {this.state.user.lastname}</h4></Row>
                </div>}
                <Card >
                    <Card.Body>
                        <Row>
                            <Col><Nav variant="tabs" defaultActiveKey="#lists">
                                <Nav.Item>
                                    <Nav.Link href="#Profile">Profile</Nav.Link>
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

                        </Row>
                        <Row>
                            <ListView />
                        </Row>
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
        );
    }
}