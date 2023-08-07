import React, { Component } from "react";
import { Card, Button, Nav, Container, Modal, Row, Col, Tab, Tabs, Figure } from 'react-bootstrap';
import AddItem from "../components/lists/add-item.component";
import ListView from "../components/lists/view-list.component";
import ProfileMainView from "../components/profile/profile.component"
import GroupMainView from "../components/groups/group.component";
import Image from 'react-bootstrap/Image'
import GetCurrentUser from '../helper'



export default class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

    }
    componentWillMount = () => {
        var user = GetCurrentUser();

        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
        })
        console.log(this.state.user);
        console.log(this.state.user.photo);


    }
    render() {
        return (
            <Container>
                <Row className="jumbotron-profile">
                    <Row sm={3} className="justify-content-md-center">
                        {this.state.user && <Figure>
                            <Figure.Image
                                  width={150}
                                  height={'auto'}
                                alt={this.state.user.firstname}
                                src={this.state.user.photo}
                            />
                        </Figure>}
                    </Row>
                    <Row sm={6} className="justify-content-md-center">
                        {this.state.user && <h4> {this.state.user.firstname} {this.state.user.lastname}</h4>}
                    </Row>
                </Row>

                <Row className="container-main">
                    <Col>
                        <Tabs
                            defaultActiveKey="lists"
                            id="uncontrolled-tab-example"
                            className="mb-3 tab-list"
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
                           
                        </Tabs>

                    </Col>

                </Row>

            </Container>
        );
    }

}
