import React, { Component } from "react";
import Select from 'react-select'
import { Navigate, Link } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import groupsService from "../../services/groups.service";
import listsService from "../../services/lists.service";
export default class AddGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            groupname: "",
            owner: "",
            owner_id: "",
            private: false,
            type: "",
            status: "",
            lists: [],
            members: [],
            invited: [],
            redirect: false,
            listsData: [],
            selectedLists: []
        };

        this.onChangeGroupName = this.onChangeGroupName.bind(this);
        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePrivate = this.onChangePrivate.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeList = this.onChangeList.bind(this);
        this.saveGroup = this.saveGroup.bind(this);
        this.loadList = this.loadList.bind(this);
        this.loadUser = this.loadUser.bind(this);

        if (props.groupData) {
            this.state = {
                _id: props.groupData._id,
                groupname: props.groupData.groupname,
                owner: props.groupData.owner,
                owner_id: props.groupData.owner_id,
                private: props.groupData.private,
                type: props.groupData.type,
                status: props.groupData.status,
                lists: props.groupData.lists,
                members: props.groupData.members
            }
        }
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
    onChangePrivate(e) {
        this.setState({
            private: e.target.value
        });
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }
    onChangeList(e) {
        // const options = [...e.target.selectedOptions];
        const values = e.map(option => option.value);
        this.setState({
            lists: values,
            selectedLists: e,
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
            this.loadList(us);
        }
    }
    async loadList(user) {
        listsService.getByUser(user._id)
            .then(response => {
                const newArray = response.data.map(el => {
                    return {
                        value: el._id,
                        label: el.name
                    }
                })
                const filteredList = newArray.filter(number =>
                    this.state.lists.includes(number.value));
                this.setState({
                    listsData: newArray,
                    selectedLists: filteredList
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    async saveGroup(e) {
        e.preventDefault();
        var data = {
            groupname: this.state.groupname,
            owner: this.state.owner,
            owner_id: this.state.owner_id,
            type: this.state.type,
            status: this.state.status,
            lists: this.state.lists,
            members: this.state.members,
            invited: this.state.invited,
            private: this.state.private,
            createdby: this.state.owner,
            createddate: new Date(),
            updatedby: this.state.owner,
            updateddate: new Date()
        };
        if (this.state._id) {
            groupsService.update(this.state._id, data)
                .then((respond) => {
                    this.setState({
                        _id: respond.data._id,
                        groupname: respond.data.groupname,
                        owner: respond.data.owner,
                        owner_id: respond.data.owner_id,
                        private: respond.data.private,
                        type: respond.data.type,
                        status: respond.data.status,
                        lists: respond.data.lists,
                        members: respond.data.members,
                        invited: respond.data.invited,
                        redirect: true

                    })
                    console.log(respond.data);
                    alert("Updated Group " + respond.data.groupname)
                })
        }
        else {
            groupsService.create(data)
                .then((respond) => {
                    this.setState({
                        _id: respond.data._id,
                        groupname: respond.data.groupname,
                        owner: respond.data.owner,
                        owner_id: respond.data.owner_id,
                        private: respond.data.private,
                        type: respond.data.type,
                        status: respond.data.status,
                        lists: respond.data.lists,
                        members: respond.data.members,
                        invited: respond.data.invited,
                        redirect: true

                    })
                    console.log(respond.data);
                    alert("Created new Group " + respond.data.groupname)
                })
        }
    }

    componentDidMount() {
        console.log("loaded");
        this.loadUser();
    }

    render() {
        const statusData = [{ id: 1, value: "New" }, { id: 2, value: "Ongoing" }, { id: 3, value: "Closed" }];
        const typeData = [{ id: 1, value: "Christmas" }, { id: 2, value: "Birthday" }, { id: 3, value: "Wedding" }, { id: 4, value: "Others" }];

        return (
            <Container>
                {this.state.redirect && <Navigate to={"/groups/" + this.state._id} />}
                <Form onSubmit={this.saveGroup}>
                    <Form.Group>
                        <Form.Label>Group Name</Form.Label>
                        <Form.Control placeholder="Group Name" disabled={false} value={this.state.groupname} onChange={this.onChangeGroupName} required />
                        <Form.Label>Owner</Form.Label>
                        <Form.Control disabled={true} value={this.state.owner} onChange={this.onChangeOwner} />
                        <Form.Label>Type</Form.Label>
                        <Form.Select value={this.state.type} onChange={this.onChangeType} disabled={false} required >
                            <option key="0" value="">Category</option>
                            {
                                typeData.map(function (type, index) {
                                    return <option key={index} value={type.id} >{type.value}</option>
                                })
                            }
                        </Form.Select>

                        <Form.Label>Status</Form.Label>
                        <Form.Select value={this.state.status} onChange={this.onChangeStatus} disabled={false} required >
                            <option key="0" value="">Status</option>
                            {
                                statusData.map(function (status, index) {
                                    return <option key={index} value={status.id} >{status.value}</option>
                                })
                            }

                        </Form.Select>
                        <Form.Label>List</Form.Label>
                        <Select
                            isMulti={true}
                            name="colors"
                            options={this.state.listsData}
                            onChange={this.onChangeList}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={this.state.selectedLists}
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Private"
                            onChange={this.onChangePrivate}
                            value={this.state.private}
                        />
                        <Button variant="custom" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}