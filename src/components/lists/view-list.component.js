import React, { Component } from "react";
import { Link } from 'react-router-dom';
import listsService from "../../services/lists.service";
import CreateList from "./create-list.component"
import { Container, Card, Row, Modal, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
const Todo = props => (

    <Card key={props.todo._id} style={{ width: '18rem' }} className="m-3 text-center ">
        <Card.Img src={props.todo.image} />
        <Card.Body>
            <Card.Title>{props.todo.name}</Card.Title>
            <Card.Text>
                Event Date:<br />
                {props.todo.set_date}<br />

            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Row>
                <Button size="sm" variant="custom" href={"/list/" + props.todo._id}>View List</Button>
                <Button size="sm" variant="custom" onClick={this.deleteList(props.todo._id)}>Delete</Button>
            </Row>

        </Card.Footer>
    </Card>

)

export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            modalShow: false
        };
    }
    openModal = () => this.setState({ modalShow: true });
    closeModal = () => this.setState({ modalShow: false });
    componentDidMount() {
        this.loadList();
    }
    loadList() {
        var user = (JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : "Guest");
        listsService.getByUser(user._id)
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return (
                //<Todo todo={currentTodo} key={i} this={this}/>;
                <Card key={currentTodo._id} style={{ width: '18rem' }} className="m-3 text-center ">
                    <Card.Img src={currentTodo.image} />
                    <Card.Body>
                        <Card.Title>{currentTodo.name}</Card.Title>
                        <Card.Text>
                            Event Date:<br />
                            {currentTodo.set_date}<br />

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Button size="sm" variant="custom" href={"/list/" + currentTodo._id}>View List</Button>
                            <Button size="sm" variant="custom" onClick={this.deleteList} id={currentTodo._id}>Delete</Button>
                        </Row>

                    </Card.Footer>
                </Card>
            )
        }, this)
    }

    async deleteList(e) {
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
    render() {
        return (

            <Container>
                <br />
                <h4>Your Lists</h4>
                <Row xs={1} md={3}>
                    <Card className='text-center m-3' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Text>
                                <Link onClick={this.openModal}>
                                    <Image src={require('../../img/plus_sign.png')} roundedCircle />
                                </Link>
                                <br />
                                <span>Add List</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {this.todoList()}
                </Row>
                <Modal show={this.state.modalShow} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><CreateList /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}