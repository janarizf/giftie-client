import React, { Component } from "react";
import Select from 'react-select'
import { ImgUpload, CheckImgFile } from "../../../helper"
import { Button, Container, Form, Col, Row, Figure } from 'react-bootstrap';
import groupsService from "../../../services/groups.service";
import listsService from "../../../services/lists.service";
export default class AddGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: props.groupid,
            groupname: "",
            owner: "",
            owner_id: "",
            private: false,
            type: "",
            image: "",
            status: "",
            lists: [],
            members: [],
            invited: [],
            redirect: false,
            listsData: [],
            selectedLists: [],
            hasImage: false,
            imageSrc: [],
            imageUpload: []
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
        this.loadGroup = this.loadGroup.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
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
    onChangeImage(e) {
        CheckImgFile(e, function (ImagesArray) {
            console.log(e.target.files);
            console.log(ImagesArray);
            this.setState({
                hasImage: true,
                imageSrc: ImagesArray,
                imageUpload: e.target.files
            });
        }.bind(this))
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
                updatedby: us._id
            })
            this.loadGroup(us);


        }
    }
    async loadGroup() {
        groupsService.get(this.state._id)
            .then(response => {
                this.setState({
                    groupname: response.data.groupname,
                    owner: response.data.owner,
                    owner_id: response.data.owner_id,
                    image: response.data.image,
                    private: response.data.private,
                    type: response.data.type,
                    status: response.data.status,
                    lists: response.data.lists,
                    members: response.data.members,
                    invited: response.data.invited
                });
                if (response.data.image.length > 0) {
                    this.setState({
                        hasImage: true,
                        imageSrc: [response.data.image],
                    })
                }
                this.loadList();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    async loadList() {
        listsService.getByUser(this.state.updatedby)
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
            createddate: this.state.createdby,
            updatedby: this.state.updatedby,
            updateddate: new Date(),
            image: this.state.image
        };
        if (this.state._id) {
            if (this.state.hasImage) {
                ImgUpload(this.state.imageUpload[0], function (uploaded) {
                    const apiurl = process.env.REACT_APP_APIURL;
                    data.image = apiurl + "lists/getImage/" + uploaded.data[0].filename;
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
                            window.location.reload();
                        })
                }.bind(this))
            }
            else {
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
                        window.location.reload();
                    })
            }
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
                <Form onSubmit={this.saveGroup}>
                    <Row>
                        <Col>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>Group Image:</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control type="file" accept=".png, .jpg, .jpeg" name="photo" id="input-file" onChange={this.onChangeImage} />
                                    {this.state.image && this.state.imageSrc}
                                    {this.state.hasImage &&
                                        this.state.imageSrc.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <Figure>
                                                        <Figure.Image src={item} width={150} height={150} />
                                                    </Figure>
                                                    {/*  <button type="button" onClick={() => this.deleteImage(index)}>
                    delete
                  </button> */}
                                                </div>
                                            );
                                        })
                                    }
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>Group Name</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control placeholder="Group Name" disabled={false} value={this.state.groupname} onChange={this.onChangeGroupName} required />
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>Owner</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control disabled={true} value={this.state.owner} onChange={this.onChangeOwner} />
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>Type</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Select value={this.state.type} onChange={this.onChangeType} disabled={false} required >
                                        <option key="0" value="">Category</option>
                                        {
                                            typeData.map(function (type, index) {
                                                return <option key={index} value={type.id} >{type.value}</option>
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>Status</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Select value={this.state.status} onChange={this.onChangeStatus} disabled={false} required >
                                        <option key="0" value="">Status</option>
                                        {
                                            statusData.map(function (status, index) {
                                                return <option key={index} value={status.id} >{status.value}</option>
                                            })
                                        }

                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col sm={2}>
                                    <Form.Label>List</Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Select
                                        isMulti={true}
                                        name="colors"
                                        options={this.state.listsData}
                                        onChange={this.onChangeList}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        value={this.state.selectedLists}
                                    />
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col sm={10}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Private"
                                        onChange={this.onChangePrivate}
                                        value={this.state.private}
                                    />
                                </Col>
                            </Row>
                        </Col>


                    </Row>
                    <Button variant="custom" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        )
    }
}