import React, { Component } from "react";
import { Card, Button, Nav, Container, Modal, Row, Col, Tab, Tabs } from 'react-bootstrap';
import AddItem from "../components/lists/add-item.component";
import ListView from "../components/lists/view-list.component";
import ProfileMainView from "../components/profile/profile.component"
import GroupMainView from "../components/groups/group.component";
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
                {this.state.user && <Row className="jumbotron-profile">
                    <Row sm={6} className="justify-content-md-center"> 
                    <Image src={this.state.user.photo} roundedCircle /></Row>
                    <Row sm={6} className="justify-content-md-center"><h4> {this.state.user.firstname}  {this.state.user.lastname}</h4></Row>
                </Row>}

                <Row className="container-main">
                    <Col>
                        <Tabs
                            defaultActiveKey="lists"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="profile" title="Profile">
                                <ProfileMainView />
                            </Tab>
                            <Tab eventKey="lists" title="Lists">
                                <ListView />
                            </Tab>
                            <Tab eventKey="groups" title="Groups">
                                <GroupMainView />
                            </Tab>
                            <Tab eventKey="settings" title="Settings">

                            </Tab>
                        </Tabs>

                    </Col>

                </Row>



                <Modal show={this.state.modalShow} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add an item to your list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><AddItem /></Modal.Body>
                </Modal>
            </Container>
        );
    }
}