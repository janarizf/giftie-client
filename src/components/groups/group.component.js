import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import groupsService from "../../services/groups.service";
import { Link } from 'react-router-dom';
import AddGroup from "./add-group.component"
import { Container, Card, Row, Modal, Button, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export default function GroupMainView() {
    const [groupData, setgroupData] = useState({
        groups: []
    })

    const [deleteData, setdeleteData] = useState({
        data: []
    })

    const [modal, setModal] = useState({
        modalShow: false
    })
    const params = useParams();
    useEffect(() => {
        async function fetchData() {
            var user = (JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : "Guest");
            groupsService.getByUser(user._id)
                .then(response => {
                    setgroupData({ groups: response.data });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        fetchData();
        return;
    }, [params.id, deleteData]);

    function openModal() {
        setModal({
            modalShow: true
        });
    };
    function closeModal() {
        setModal({
            modalShow: false
        });
    };

    function groupList() {
        return groupData.groups.map(function (currentTodo, i) {
            return (
                <div className='p-1'>
                    <Card key={currentTodo._id} className='text-center' >
                        {/* <Card.Img src={currentTodo.image} /> */}
                        <Card.Body>
                            <Card.Title>{currentTodo.groupname}</Card.Title>
                            <Card.Text>
                                <Button size="md" variant="custom" href={"/groups/" + currentTodo._id}>View Group</Button> <br />
                                <Button size="md" variant="custom" onClick={deleteList} id={currentTodo._id}>Delete</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        }, this)
    }

    async function deleteList(e) {
        console.log(e.target.id);
        var deleted = await groupsService.delete(e.target.id)
        try {
            console.log(deleted);
            setdeleteData({ data: deleted.data });
            // window.location.reload(true)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className='p-3'>
            <Col>
                <h4>Your Groups</h4>
                <Row xs={1} md={2} lg={3} >
                    <div className='p-1'>
                        <Card className='text-center' >
                            <Card.Body>
                                <Card.Text>
                                    <Link onClick={openModal}>
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
                    </div>
                    {groupList()}
                </Row>
                <Modal show={modal.modalShow} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Group</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><AddGroup /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Container>
    );
}