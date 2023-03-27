import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import groupsService from "../../services/groups.service";
export default class AddGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            groupname: "",
            owner: "",
            owner_id: "",
            type: "",
            status: "",
            list: []


        };

        this.onChangeGroupName = this.onChangeGroupName.bind(this);
        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeList = this.onChangeList.bind(this);
    }

    onChangeGroupName(e) {
        this.setState({
            groupname: e.target.value
        });
    }
    onChangeOwner(e) {
        this.setState({
            owner: e.target.value
        });
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }
    onChangeList(e) {
        this.setState({
            list: e.target.option
        });
    }
    async loadUser() {
        console.log(localStorage.getItem('user'));
        if (localStorage.getItem('user') !== 'undefined') {
            var us = (JSON.parse(localStorage.getItem('user')));
            console.log(us);
            this.setState({
                owner_id: us._id,
                owner: us.firstname + " " + us.lastname
            })
        }
    }
    componentDidMount() {
        console.log("loaded");
        this.loadUser();
    }

    render() {
        const statusData = [{ id: 1, value: "New" }, { id: 2, value: "Closed" }, { id: 3, value: "Ongoing" }];
        const typeData = [{ id: 1, value: "Christmas" }, { id: 2, value: "Birthday" }, { id: 3, value: "Wedding" }, , { id: 4, value: "Others" }];
        const listData = [{ id: 1, value: "List 1" }, { id: 2, value: "List 2" }, { id: 3, value: "List 3" }, , { id: 4, value: "List 4" }];
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control placeholder="Group Name" disabled={false} value={this.state.groupname} onChange={this.onChangeGroupName} />
                    <Form.Label>Owner</Form.Label>
                    <Form.Control disabled={true} value={this.state.owner} onChange={this.onChangeOwner} />
                    <Form.Label>Type</Form.Label>
                    <Form.Select value={this.state.type} onChange={this.onChangeType} disabled={false}  >
                        <option key="0" value="">Category</option>
                        {
                            typeData.map(function (type, index) {
                                return <option key={index} value={type.id} >{type.value}</option>
                            })
                        }
                    </Form.Select>
                    <Form.Label>Status</Form.Label>
                    <Form.Select value={this.state.status} onChange={this.onChangeStatus} disabled={false}  >
                        <option key="0" value="">Category</option>
                        {
                            statusData.map(function (status, index) {
                                return <option key={index} value={status.id} >{status.value}</option>
                            })
                        }

                    </Form.Select>
                    <Form.Label>List</Form.Label>
                    <Form.Select value={this.state.list} onChange={this.onChangeList} disabled={false} multiple>
                        {
                            listData.map(function (status, index) {
                                return <option key={index} value={status.id} >{status.value}</option>
                            })
                        }

                    </Form.Select>

                    <Button variant="custom">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}