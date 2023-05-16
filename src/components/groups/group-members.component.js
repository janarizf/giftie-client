import React, { Component } from "react";
import { Container, ListGroup, Button, Image } from 'react-bootstrap';
import groupsService from "../../services/groups.service";
import { Link } from 'react-router-dom';

export default class GroupMembersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: props.groupid,
            group: [],
            members: []
        }
    }
    loadGroup() {
        groupsService.get(this.state.groupId)
            .then(response => {
                this.setState({
                    group: response.data,
                    members: response.data.members
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

                <h4> Members: <Link onClick={(() => alert("add"))}>
                    <Image src={require('../../img/plus_sign.png')} roundedCircle width={'25px'}/>
                </Link></h4>

                <h6>Group Owner: {this.state.group.createdby}</h6>
                <ListGroup>
                    {this.state.members.map(function (member, index) {
                        return (
                            <ListGroup.Item key={index} action onClick={() => alert('haha')} as="li">
                                {member.name}
                            </ListGroup.Item>
                        )
                    })}



                </ListGroup>
            </Container>
        )
    }
}