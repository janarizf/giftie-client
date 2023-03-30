import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import listsService from "../../services/lists.service";
import CreateList from "./create-list.component"
import { Container, Card, Row, Modal, Button, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export default function ListView() {
    const [listData, setListData] = useState({
        todos: []
    })
    const [modal, setModal] = useState({
        modalShow: false
    })
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            var user = (JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : "Guest");
            listsService.getByUser(user._id)
                .then(response => {
                    setListData({ todos: response.data });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        fetchData();

        return;
    }, [params.id]);

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

    function todoList() {
        return listData.todos.map(function (currentTodo, i) {
            return (
                <div  className='p-1'>
                    <Card key={currentTodo._id} className='text-center' >
                        {/* <Card.Img src={currentTodo.image} /> */}
                        <Card.Body>
                            <Card.Title>{currentTodo.name}</Card.Title>
                            <Card.Text>
                                Event Date:<br />
                                {currentTodo.set_date.substring(0, 10)}<br />

                                <Button size="md" variant="custom" href={"/list/" + currentTodo._id}>View List</Button> <br />
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
        var deleted = await listsService.delete(e.target.id)
        try {
            console.log(deleted);
            window.location.reload(true)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Container  className='p-3'>
            <Col>
                <h4>Your Lists</h4>
                <Row xs={1} md={2} lg={3}>
                    <div  className='p-1'>
                        <Card className='text-center' style={{ height: '100%' }}>
                            <Card.Body>
                                <Card.Text>
                                    <Link onClick={openModal}>
                                        <br />
                                        {/* <Link to={`/listcreate`}> */}
                                        <Image src={require('../../img/plus_sign.png')} roundedCircle />
                                        <br />
                                    </Link>
                                    <br />
                                    <span>Add List</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    {todoList()}
                </Row>
                <Modal show={modal.modalShow} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><CreateList /></Modal.Body>
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