import React, { Component } from "react";
import { Container, ListGroup, Button, Image, Modal, Form, FloatingLabel, Row } from 'react-bootstrap';
import groupsService from "../../services/groups.service";
import { Link } from 'react-router-dom';

export default class GroupMembersView extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.sendInvite = this.sendInvite.bind(this);

        this.state = {
            groupId: props.groupid,
            group: [],
            members: [],
            invited: [],
            emails: "",
            showInvite: false
        }

    }
    onChangeEmail(e) {
        this.setState({
            emails: e.target.value
        });
    }

    sendInvite() {
        var data = {
            emails: this.state.emails,
            groupid: this.state.groupId
        }
        groupsService.sendInvite(data);
    }
    loadGroup() {
        groupsService.get(this.state.groupId)
            .then(response => {
                this.setState({
                    group: response.data,
                    members: response.data.members,
                    invited: response.data.invited
                })
                console.log(response.data.members)
            }
            )
            .catch(function (error) {
                console.log(error);
            })

    }

    componentDidMount() {
        this.loadGroup();
    }
    render() {
        return (
            <Container>
                <Row>
                    <h4> Members: <Link onClick={(() => this.setState({ showInvite: true }))}>
                        <Image src={require('../../img/plus_sign.png')} roundedCircle width={'25px'} />
                    </Link></h4>
                </Row>
                <h6>Group Owner: {this.state.group.createdby}</h6>
                <Row>
                    <Row>
                        {this.state.members.map(function (member, index) {
                            return (
                                <Row key={index}>
                                    {member.name}
                                </Row>
                            )
                        })}

                    </Row>
                </Row>
                <Row>
                <h5>Invited:</h5>
                </Row>
                <Row>
                    {this.state.invited.map(function (member, index) {
                        return (
                            <Row key={index} >
                                {member}
                            </Row>
                        )
                    })}
                </Row>
                <Modal show={this.state.showInvite} onHide={() => this.setState({ showInvite: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Invite Group Member</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.sendInvite}>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email Address (Comma Separated)"
                                className="mb-3"
                            >
                                <Form.Control placeholder="Email" required value={this.state.emails} onChange={this.onChangeEmail} />
                            </FloatingLabel>

                            <Button variant="custom" type="submit">Send Invite</Button>

                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}