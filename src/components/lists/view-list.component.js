import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { Container, Card, Row, Modal, Button, Col, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import listsService from "../../services/lists.service";
import CreateList from "./create-list.component"
import { SortItemsByField } from "../../helper";


export default function ListView() {
    const [listData, setListData] = useState({
        todos: []
    })
    const [modal, setModal] = useState({
        modalShow: false
    })
    const [sortField, setSortField] = useState({
        sortField: "name"
    })
    const [sortOrder, setSortOrder] = useState({
        sortOrder: true
    })
    const params = useParams();
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
    const sortItemsByField = () => {
        const sortedItems = listData.todos.sort((a, b) => {
            // Access the field value within each object
            const fieldValueA = a[sortField.sortField].toLowerCase();
            const fieldValueB = b[sortField.sortField].toLowerCase();

            // Customize the comparison logic based on your sorting requirements
            if (fieldValueA < fieldValueB) {
                return sortOrder.sortOrder ? -1 : 1;
            }
            if (fieldValueA > fieldValueB) {
                return sortOrder.sortOrder ? 1 : -1
            }
            return 0; // fieldValueA and fieldValueB are considered equal
        });

        return sortedItems;
    };
    function todoList() {
        return listData.todos.map(function (currentTodo, i) {
            return (
                <div className='p-3'>
                    <Card key={currentTodo._id} className='text-center card-item' >
                        {/* <Card.Img src={currentTodo.image} /> */}
                        <Card.Body>
                            <Card.Title>{currentTodo.name}</Card.Title>
                            <Card.Text>
                                Event Date:<br />
                                {currentTodo.set_date.substring(0, 10)}<br />
                            </Card.Text>
                            <div className="dropup">
                                <button className="dropbtn">
                                    <Image src={require('../../img/ellipsis-icon.png')} height={'30px'} />
                                </button>
                                <div className="dropup-content">
                                    <Button size="sm" variant="custom" href={"/list/" + currentTodo._id}>View List</Button>
                                    <Button size="sm" variant="custom" onClick={deleteList} id={currentTodo._id}>Delete</Button>
                                </div>
                            </div>
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
     function sortList(field) {
        const sortedItems = SortItemsByField(field,!sortOrder.sortOrder,listData.todos)
        setListData({ todos: sortedItems });
        setSortOrder({sortOrder: !sortOrder.sortOrder});
        setSortField({sortField: field});
    }
    return (
        <Container className='p-3'>
            <Col>
                <h4>Your Lists</h4>
                <Form>
                    Sort By:   <Button size="sm" variant="custom" onClick={(() => sortList("name"))}>List</Button> <Button size="sm" variant="custom" onClick={(() => sortList("category_id"))}>Category</Button> <Button size="sm" variant="custom" onClick={(() => sortList("set_date"))}>Event Date</Button>
                </Form>
                <Row xs={1} md={2} lg={3}>
                    <div className='p-3'>
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