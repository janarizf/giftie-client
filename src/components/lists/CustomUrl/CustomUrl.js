import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { Button, Row, Col, Form, Container, Image, ToggleButton, ButtonGroup, Figure } from 'react-bootstrap';

import listurlrequest from "../../../services/admin/listurlrequest.service"

export default class CustomUrl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_id: props.listId,
            originallink: props.listId,
            requestedlink: "",
            linkstatus: "",
            requestedby: props.user,
            requesteddate: new Date(),
            approvedby: "",
            approveddate: ""
        }
        this.onChangeRequested = onChangeRequested.onChangeName.bind(this);
    }
    onChangeRequested(e) {
        this.setState({
            requestedlink: e.target.value
        });
    }
    onSubmit(e) {
        try {

            e.preventDefault();
            var data = {
                listid: this.state.list_id,
                originallink: this.state.originallink,
                requestedlink: this.state.requestedlink,
                linkstatus: "Waiting",
                requestedby: "",
                requesteddate: new Date(),
                approvedby: "",
                approveddate: new Date()
            }
            listurlrequest.create(data)
                .then((respond) => {
                    window.location.reload()
                }
                );

        }
        catch
        {

        }
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>  Original Url:</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control placeholder="originallink" name="original" required disabled value={this.state.originallink} />
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>  Requested Url:</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control placeholder="requestedlink" name="requested" required value={this.state.requestedlink} onChange={this.onChangeRequested} />
                                </Col>
                            </Row>

                            <Button variant="custom" type="submit">
                                Save
                            </Button>

                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}