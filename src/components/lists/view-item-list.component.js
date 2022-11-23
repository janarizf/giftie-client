import React, { Component } from "react";
import AddItem from "./add-item.component";
import ViewItem from "./view-item.components";
import listsService from "../../services/lists.service";
import { Link } from 'react-router-dom';
import { Card, Button, Nav, Modal, Row, Col, Form, Image } from 'react-bootstrap';
import btnImg from '../../img/img-placeholder.jpg'
import { PlusCircle } from 'react-bootstrap-icons';
import { format } from 'date-fns';

export default class ItemListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listId: props.listId,
            list: [],
            name: "",
            user_id: "1",
            status: "1",
            category: "",
            introduction: "",
            location: "",
            set_date: format(new Date(), 'yyyy-MM-dd'),
            items: [],
            user: this.getUser(),
            addItemShow: false,
            viewItemShow: false,
            selectedItem: ""
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeSetDate = this.onChangeSetDate.bind(this);
        this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    openAddItem =  () => this.setState({ addItemShow: true });
    closeAddItem = () => this.setState({ addItemShow: false });
    closeViewItem = () => this.setState({ viewItemShow: false });
    openViewItem = (e) => this.setState({viewItemShow: true, selectedItem: this.getSelectedItem(e.currentTarget.id) });
   
    getSelectedItem(itemId){
        return this.state.items.filter((a) => a._id === itemId)
    }
    getUser() {
        var userObj = JSON.parse(localStorage.getItem('user'));
        return userObj ? userObj.name : "";
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangeIntroduction(e) {
        this.setState({
            introduction: e.target.value
        });
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    onChangeSetDate(e) {
        this.setState({
            set_date: e.target.value
        });
    }

    async onSubmit(e) {

        var data = {
            name: this.state.name,
            user_id: this.state.user,
            status: this.state.status,
            category: this.state.category,
            introduction: this.state.introduction,
            location: this.state.location,
            set_date: this.state.set_date,
            status_id: 1,
            updatedby: this.state.user,
            updateddate: new Date()
        };
        await listsService.update(this.state.list._id, data)
            .then(response => { })
            .catch(function (error) {
                console.log(error);
            })

    }
    async loadList() {
        await listsService.get(this.state.listId)
            .then(response => {
                this.state.list = response.data;
                this.state.items = response.data.items;
                this.state.name = response.data.name;
                this.state.category = response.data.category;
                this.state.introduction = response.data.introduction;
                this.state.location = response.data.location;
                this.state.set_date = format(response.data.set_date, 'yyyy-MM-dd');
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        this.loadList();
    }

    render() {
        const categoryData = [{ id: 1, value: "Birthday" }, { id: 2, value: "Wedding" }, { id: 3, value: "Christmas" }, { id: 4, value: "Baby Shower" }, { id: 5, value: "Housewarming" }, { id: 6, value: "Others" }];
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <Form className="formItem" onSubmit={this.onSubmit}>
                        <Row>
                            <Col sm>
                                <Button>
                                    <Image src={btnImg} rounded width='200px' />
                                </Button>
                            </Col>
                            <Col sm>
                                <Form.Control placeholder="Wishlist" name="name" required value={this.state.name} onChange={this.onChangeName} />
                                <Form.Control type="date" name='set_date' value={this.state.set_date} onChange={this.onChangeSetDate} />
                                <Form.Control placeholder="Add Location" name="location" value={this.state.location} onChange={this.onChangeLocation} />
                                <Form.Control placeholder="Introduction" name="introduction" value={this.state.introduction} onChange={this.onChangeIntroduction} />
                                <Form.Select name="category" value={this.state.category} onChange={this.onChangeCategory} required>
                                    <option value="">Category</option>
                                    {
                                        categoryData.map(function (category) {
                                            return <option key={category.id} value={category.id} >{category.value}</option>
                                        })
                                    }
                                </Form.Select>
                            </Col>
                            <Col sm></Col>
                            <Col sm>
                                <Button variant="primary" type="submit">
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </div>
                <Card >
                    <Card.Body>
                        <Row>
                            <Col><Nav variant="tabs" defaultActiveKey="#items">
                                <Nav.Item>
                                    <Nav.Link href="#items">Items</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#settings">Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col></Col>
                            <Col>
                                <Link className="nav-link" to={'#'} onClick={this.openAddItem}><PlusCircle color="gray" /> Add items</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Your Items</h4>
                                <Row xs={1} md={3}>
                                    {this.state.items.map(function (d) {
                                        return (
                                            <div>
                                                <Card key={d._id} className='h-100'>
                                                    <Card.Img variant="top" src={d.image} />
                                                    <Card.Body>
                                                        <Card.Title>{d.name}</Card.Title>
                                                        <Card.Text>
                                                            {d.note}<br />
                                                            {d.category_id}<br />
                                                            {d.quantity}<br />
                                                        </Card.Text>

                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Button onClick={this.openViewItem} id={d._id}>View</Button>
                                                    </Card.Footer>
                                                </Card>
                                            </div>
                                        )

                                    }, this)}
                                </ Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Modal show={this.state.addItemShow} onHide={this.closeAddItem} >
                    <Modal.Header closeButton>
                        <Modal.Title>Add an item to your list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddItem listData={this.state.list} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeAddItem}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal >
                <Modal show={this.state.viewItemShow} onHide={this.closeViewItem} >
                    <Modal.Header closeButton>
                        <Modal.Title>Item Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <ViewItem itemData={this.state.selectedItem} />
                       
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeViewItem}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
