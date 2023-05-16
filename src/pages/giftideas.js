import React, { Component } from "react";
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import listsService from "../services/lists.service";

export default class Gift extends Component {
    constructor(props) {
        super(props);
        console.log()
        this.state = {
            items: [],
        }

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
        this.setState({ items: allItems });
        console.log(allItems);
    }
    imgSrc(d) {
        if (d.length > 0) {
            return "http://localhost:9000/lists/getImage/" + d[0].filename;
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
                            />
                            <Button className="custom-search-botton">Search</Button>

                        </Form>
                    </Row>
                    <Row xs={1} md={3} lg={4}>

                        {this.state.items.map(function (d, index) {
                            return (
                                <div className='p-4'>
                                    <Card key={index} className='text-center card-item'>
                                        <Card.Body>
                                            <Card.Img variant="top" src={require('../img/giftie_question.png')} className="card-img" />
                                            <Card.Title>{d.name}</Card.Title>

                                            <Card.Text>

                                                {d.category_id}<br />
                                                <Button size="sm" variant="custom">Add to List</Button>
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </div>
                            )
                        })}
                    </Row>
                </Col>
            </Container>
        );
    }
}