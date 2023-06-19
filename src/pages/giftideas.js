import React, { Component } from "react";
import { Container, Card, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import listsService from "../services/lists.service";



export default class Gift extends Component {
    constructor(props) {
        super(props);
        console.log()
        this.state = {
            items: [],
            filteredItems:[],
            searchQuery: ""
        }
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
    }
    openAddItem = () => this.setState({ addItemShow: true });
    closeAddItem = () => this.setState({ addItemShow: false });

    onChangeFilter(e) {
        this.setState({
            searchQuery: e.target.value
        });
    }

    searchFilter() {
        const filteredItems = this.state.items.filter((item) =>
            item.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        );

        this.setState({
            filteredItems: filteredItems
        })
    }

    componentDidMount() {
        this.getItems();
    }
    async getItems() {
        const lists = await listsService.getAll()
        const allItems = [];
        for (const list of lists.data) {
            allItems.push(...list.items);
        }
        this.setState({ items: allItems, filteredItems: allItems });
        console.log(allItems);
    }
    imgSrc(d) {
        if (d.length > 0) {
            const apiurl = process.env.REACT_APP_APIURL;
            return apiurl + "lists/getImage/" + d[0].filename;
        } else {
            return require('../img/giftie_question.png')
        }
    }

    render() {
        return (
            <Container className="container-main p-5">
                <Col>
                    <Row className="row-text text-center">
                        <h2>Gift Ideas</h2>
                        <p>
                            Want some inspiration? Browse through<br />
                            our Gift Ideas and instantly add to your<br />
                            list using our Add to List button
                        </p>
                    </Row>
                    <Row className="row-headings" >
                        <Form className="custom-search">

                            <Form.Control
                                className="custom-search-input"
                                type="search"
                                placeholder="Find the great gift"
                                aria-label="Search"
                                onChange={this.onChangeFilter}
                            />
                            <Button className="custom-search-botton" onClick={this.searchFilter}>Search</Button>

                        </Form>
                    </Row>
                    <Row xs={1} md={3} lg={4}>

                        {this.state.filteredItems.map(function (d, index) {
                            return (
                                <div className='p-4'>
                                    <Card key={index} className='text-center card-item'>
                                        <Card.Img variant="top" src={this.imgSrc(d.image)} className="card-img" />
                                        <Card.Body>

                                            <Card.Title>{d.name}</Card.Title>

                                            <Card.Text>

                                                {d.category_id}<br />
                                                <Button size="sm" variant="custom" onClick={this.openAddItem}>Add to List</Button>
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </div>
                            )
                        }, this)}
                    </Row>
                </Col>
                <Modal show={this.state.addItemShow} onHide={this.closeAddItem} >
                    <Modal.Header closeButton>
                        <Modal.Title>Add item to your list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Check
                                type={'radio'}
                                id={`default-radio`}
                                label={`New`}
                                name="list"
                            />
                            <Form.Check
                                type={'radio'}
                                id={`default-radio`}
                                label={`Existing`}
                                name="list"
                            />
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form>


                    </Modal.Body>
                </Modal >
            </Container>
        );
    }
}