import React, { Component } from "react";
import { Link } from 'react-router-dom';
import listsService from "../../services/lists.service";
import { Table } from 'react-bootstrap';
const Todo = props => (
    <tr>
        <td>{props.todo.name}</td>
        <td>0</td>
        <td>{props.todo.items.length}</td>
        <td>0</td>
        <td>Open</td>
        <td><Link to={"/list/" + props.todo._id}>Show Info </Link></td>
    </tr>
)

export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    componentDidMount() {
        var user = (JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):"Guest");
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
            return <Todo todo={currentTodo} key={i} />;
        })
    }
    render() {
        return (

            <div>
                <br />
                <h4>Your Lists</h4>
                <Table id="listTable" hover>
                    <thead>
                        <tr>
                            <th>List Name</th>
                            <th>View</th>
                            <th>Items</th>
                            <th>Received</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.todoList()}

                    </tbody>
                </Table>
            </div>
        );
    }
}