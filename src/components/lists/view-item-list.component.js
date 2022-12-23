import React, { Component } from "react";
import AddItem from "./add-item.component";
import ViewItem from "./view-item.components";
import listsService from "../../services/lists.service";
import { Link } from 'react-router-dom';
import { Card, Button, Nav, Modal, Row, Col, Form, Image, Container } from 'react-bootstrap';
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
    openAddItem = () => this.setState({ addItemShow: true });
    closeAddItem = () => this.setState({ addItemShow: false });
    closeViewItem = () => this.setState({ viewItemShow: false });
    openViewItem = (e) => this.setState({ viewItemShow: true, selectedItem: this.getSelectedItem(e.currentTarget.id) });

    getSelectedItem(itemId) {
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
    async deleteItem(e, a) {
        console.log(e.target.id);
        console.log(a.state.list)
        var filtered = a.state.list.items.filter((a) => a._id !== e.target.id);
        a.state.list.items = filtered;
        this.setState({
            list: a.state.list
        })
        await listsService.update(this.state.list._id, this.state.list)
            .then(
                window.location.reload(true)
            )
            .catch(error => { console.log(error) })

        /*  var deleted = await listsService.delete(e.target.id)
         try {
             console.log(deleted);
             window.location.reload(true)
         }
         catch (error) {
             console.log(error);
         } */
    }
    componentDidMount() {
        this.loadList();
    }

    render() {
        const categoryData = [{ id: 1, value: "Birthday" }, { id: 2, value: "Wedding" }, { id: 3, value: "Christmas" }, { id: 4, value: "Baby Shower" }, { id: 5, value: "Housewarming" }, { id: 6, value: "Others" }];
        return (
            <Container>

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

                        </Row>
                        <Row>
                            <Col>
                                <h4>Your Items</h4>
                                <Row xs={1} md={2} lg={3}>
                                    <div>
                                        <Card className='text-center' key={"optionID"} style={{ height: '100%' }}>
                                            <Card.Body>
                                                <Card.Text className='my-5'>
                                                    <Link onClick={this.openAddItem}>
                                                        <br />
                                                        <Image src={require('../../img/plus_sign.png')} roundedCircle />
                                                        <br />
                                                    </Link>
                                                    <br />
                                                    <span>Add Item</span>
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </div>
                                    {this.state.items.map(function (d, index) {
                                        return (
                                            <div>
                                                <Card key={index} className='text-center'>
                                                     <Card.Body>
                                                        <Card.Img variant="top" src={"http://localhost:9000/lists/getImage/"+d.image[0].filename} className="card-img"/>
                                                        <Card.Title>{d.name}</Card.Title>
                                                        <Card.Text>
                                                           Note: {d.note}<br />
                                                           Category: {d.category_id}<br />
                                                           Quantity: {d.quantity}<br />
                                                            <Button size="sm" variant="custom" onClick={this.openViewItem} id={d._id}>View</Button><br />
                                                            <Button size="sm" variant="custom" onClick={event => this.deleteItem(event, this)} id={d._id}>Delete</Button>
                                                        </Card.Text>
                                                    </Card.Body>



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
                        <Modal.Title>Item</Modal.Title>
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
            </Container>
        );
    }
}
