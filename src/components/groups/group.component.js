import React, { Component} from "react";
import groupsService from "../../services/groups.service";
import { Link } from 'react-router-dom';
import GroupsView from "./view-group.component"
import AddGroup from "./add-group.component"
import { Container, Card, Row, Modal, Button, Col  } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
export default class GroupMainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        }
    }
    openModal = () => this.setState({ modalShow: true });
    closeModal = () => this.setState({ modalShow: false });
    render() {
     
        return (
            
            <Container>
                <GroupsView />

                <Col>
                    <h4>Your Groups</h4>
                    <Row xs={1} md={2} lg={3} >
                        <div>
                            <Card className='text-center' style={{ height: '100%' }}>
                                <Card.Body>
                                    <Card.Text>
                                        <Link onClick={this.openModal}>
                                            <br />
                                            {/* <Link to={`/listcreate`}> */}
                                            <Image src={require('../../img/plus_sign.png')} roundedCircle />
                                            <br />
                                        </Link>
                                        <br />
                                        <span>Add Group</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <GroupsView />
                        </div>
                    </Row>
                    <Modal show={this.state.modalShow} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Group</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><AddGroup /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Container>
        );

    }
}