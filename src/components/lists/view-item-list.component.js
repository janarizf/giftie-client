import React, { Component } from "react";
import AddItem from "./add-item.component";
import EditItem from "./edit-item.component";
import ViewItem from "./view-item.components";
import ListSetting from "./settings.component";
import listsService from "../../services/lists.service";
import { Link } from 'react-router-dom';
import { Card, Button, Modal, Row, Col, Image, Tab, Tabs } from 'react-bootstrap';
import { format } from 'date-fns';

export default class ItemListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listId: props.listId,
            list: [],
            name: "",
            items: [],
            reservedtems: [],
            user: this.getUser(),
            addItemShow: false,
            viewItemShow: false,
            editItemShow: false,
            selectedItem: "",
            reservedText: "Reserve Item"
        };

    }
    openAddItem = () => this.setState({ addItemShow: true });
    closeAddItem = () => this.setState({ addItemShow: false });
    closeViewItem = () => this.setState({ viewItemShow: false });
    openViewItem = (e) => this.setState({ viewItemShow: true, selectedItem: this.getSelectedItem(e.currentTarget.id) });



    getSelectedItem(itemId) {
        return this.state.items.filter((a) => a._id == itemId)
    }
    getUser() {
        var userObj = JSON.parse(localStorage.getItem('user'));
        return userObj ? userObj._id : "";
    }
    imgSrc(d) {
        if (d.length > 0) {
            const apiurl = process.env.REACT_APP_APIURL;
            return apiurl + "lists/getImage/" + d[0].filename;
        } else {
            return require('../../img/giftie_question.png')
        }
    }


    loadList() {
        listsService.get(this.state.listId)
            .then(response => {
                this.setState({
                    list: response.data,
                    items: response.data.items,
                    reservedtems: response.data.items.filter((item) => item.reserved == true),
                    name: response.data.name
                })
                console.log(response.data.items)
            }
            )
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteItem(e, a) {
        e.preventDefault();
        console.log(e.target.id);
        console.log(a.state.list)
        var filtered = a.state.list.items.filter((item) => item._id != e.target.id);
        a.state.list.items = filtered;

        listsService.update(this.state.list._id, this.state.list)
            .then((respond) => {
                this.setState({
                    list: respond.data
                })
                window.location.reload(true)
            })
            .catch(error => { console.log(error) })

    }

    async reserveItem(e) {
        console.log(e.target.id);
        console.log(this.state.list)
        var filtered = this.state.list.items.filter((item) => item._id != e.target.id);

        this.state.list.items = filtered;

        var selectedItem = this.getSelectedItem(e.target.id)[0];
        var reservedUser = this.state.user;
        selectedItem.reservedby = reservedUser;
        selectedItem.reserved = !(selectedItem.reserved);

        this.state.list.items.push(selectedItem);
        listsService.update(this.state.list._id, this.state.list)
            .then((respond) => {
                this.setState({
                    list: respond.data
                })
                //   window.location.reload(true)
                this.loadList();
            })
            .catch(error => { console.log(error) })
    }

    componentDidMount() {
        this.loadList();
    }

    render() {
        return (
            <Row className="container-main">

                <Col>
                    <Tabs
                        defaultActiveKey="items"
                        id="uncontrolled-tab-example"
                        className="mb-3 tab-list"
                    >
                        <Tab eventKey="items" title="Items">
                            <Row className='p-3'>
                                <Col>
                                    <h4>Your Items</h4>
                                    <Row xs={1} md={2} lg={3}>
                                        <div className='p-1'>
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
                                                <div className='p-1'>
                                                    <Card key={index} className='text-center card-item'>
                                                        <Card.Img variant="top" src={this.imgSrc(d.image)} className="card-img" />
                                                        <Card.Body>

                                                            <Card.Title>{d.name}</Card.Title>
                                                            <Card.Text>
                                                                Note: {d.note}<br />
                                                                Category: {d.category_id}<br />
                                                                Quantity: {d.quantity}<br />

                                                                <Button size="sm" variant="custom" onClick={this.openViewItem} id={d._id}>View</Button><br />
                                                                <Button size="sm" variant="custom" onClick={event => this.reserveItem(event, this)} id={d._id}>{(d.reserved ? "Unreserve Item" : "Reserve Item")}</Button><br />

                                                            </Card.Text>

                                                            <div className="dropup">
                                                                <button className="dropbtn">...</button>
                                                                <div className="dropup-content">

                                                                    <Button size="sm" variant="custom" onClick={event => this.deleteItem(event, this)} id={d._id}>Delete</Button>
                                                                    <Button size="sm" variant="custom" id={d._id}>Share</Button>

                                                                </div>
                                                            </div>
                                                        </Card.Body>



                                                    </Card>
                                                </div>
                                            )

                                        }, this)}
                                    </ Row>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="reserved" title="Reserved">
                            <Row className='p-3'>
                                <Col>
                                    <h4>Your Reserved Items</h4>
                                    <Row xs={1} md={2} lg={3}>
                                        {this.state.reservedtems.map(function (d, index) {
                                            return (
                                                <div className='p-1'>
                                                    <Card key={index} className='text-center card-item'>
                                                        <Card.Body>
                                                            <Card.Img variant="top" src={this.imgSrc(d.image)} className="card-img" />
                                                            <Card.Title>{d.name}</Card.Title>
                                                            <Card.Text>
                                                                Note: {d.note}<br />
                                                                Category: {d.category_id}<br />
                                                                Quantity: {d.quantity}<br />

                                                                <Button size="sm" variant="custom" onClick={this.openViewItem} id={d._id}>View</Button><br />
                                                                <Button size="sm" variant="custom" onClick={event => this.reserveItem(event, this)} id={d._id}>{(d.reserved ? "Unreserve Item" : "Reserve Item")}</Button><br />

                                                            </Card.Text>

                                                            <div className="dropup">
                                                                <button className="dropbtn">...</button>
                                                                <div className="dropup-content">

                                                                    <Button size="sm" variant="custom" onClick={event => this.deleteItem(event, this)} id={d._id}>Delete</Button>
                                                                    <Button size="sm" variant="custom" id={d._id}>Share</Button>

                                                                </div>
                                                            </div>
                                                        </Card.Body>



                                                    </Card>
                                                </div>
                                            )

                                        }, this)}
                                    </Row>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="settings" title="Settings">
                            <ListSetting listId={this.state.listId}/>
                        </Tab>

                    </Tabs>

                </Col>



                <Modal show={this.state.addItemShow} onHide={this.closeAddItem} >
                    <Modal.Header closeButton>
                        <Modal.Title>Add an item to your list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddItem listData={this.state.list} />
                    </Modal.Body>
                </Modal >
                <Modal show={this.state.editItemShow} onHide={this.closeEditItem} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditItem listData={this.state.list} itemData={this.state.selectedItem[0]} />
                    </Modal.Body>
                </Modal >
                <Modal show={this.state.viewItemShow} onHide={this.closeViewItem} >
                    <Modal.Header closeButton>
                        <Modal.Title>Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewItem itemData={this.state.selectedItem} />

                    </Modal.Body>
                </Modal>


            </Row>
        );
    }
}
