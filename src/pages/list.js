import React, { Component } from "react";
import { Card, Button, Nav, Container, Modal, Row, Col, Image, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ListCreate from './listcreate'
import btnImg from '../img/img-placeholder.jpg'
import { PlusCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import listsService from "../services/lists.service";
export default class List extends Component {
    constructor(props) {
        super(props);

       // this.name= this.name.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeSetDate = this.onChangeSetDate.bind(this);
        this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state ={
            name:"Wishlist",
            user_id:"",
            status:"",
            category:"",
            introduction:"",
            location:"",
            set_date: "",
            modalShow: false
        }
    }

    openModal = () => this.setState({ modalShow: true });
    closeModal = () => this.setState({ modalShow: false });

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

    onSubmit() {
        var data = {
            name:this.state.name,
            user_id:this.state.user_id,
            status:this.state.status,
            category:this.state.category,
            introduction:this.state.introduction,
            location:this.state.location,
            set_date:this.state.set_date,
        };
    
      /*   listsService.create(data)
          .then(response => {
            this.setState({
                name:this.response.name,
                user_id:this.response.user_id,
                status:this.response.status,
                category:this.response.category,
                introduction:this.response.introduction,
                location:this.response.location,
                set_date:this.response.set_date,
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          }); */
          console.log(data);
      }

    listInfo = [
        { image: "https://picsum.photos/200", title: "List 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
        { image: "https://picsum.photos/200", title: "List 2", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
        { image: "https://picsum.photos/200", title: "List 3", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
        { image: "https://picsum.photos/200", title: "List 4", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
      ];
    renderList = (card, index) => {
        return (
          <Card style={{ width: "auto" }} key={index} >
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img src={card.image} /></Col>
                <Col>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    {card.text}<br />
                    <Button href={card.list} variant="flat">Go to my list  <ArrowRightCircle color="white" /></Button>
                   
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )
      }
    render() {
        return (
            <div>
                <Container>
                    <div className="jumbotron jumbotron-fluid">
                        <Form>
                            <Row>
                                <Col sm>
                                    <Button size="sm">
                                        <Image src={btnImg} rounded width='200px' />
                                    </Button>
                                </Col>
                                <Col sm>
                                    <Form.Control placeholder="Wishlist" name="name" required value={this.state.name} onChange={this.onChangeName}/>
                                    <Form.Control type="date" name='set_date' value={this.state.set_date} onChange={this.onChangeSetDate}/>
                                    <Form.Control placeholder="Add Location" name="location" value={this.state.location} onChange={this.onChangeLocation}/>
                                    <Form.Control placeholder="Introduction"  name="introduction" value={this.state.introduction} onChange={this.onChangeIntroduction}/>
                                    <Form.Select aria-label="Default select example"  name="list" value={this.state.category} onChange={this.onChangeCategory}>
                                    <option>Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                        </Form.Select>
                                </Col>
                                <Col sm></Col>
                                <Col sm></Col>
                            </Row>
                            <Button variant="primary" type="submit" onClick={this.onSubmit}>
                                Submit
                            </Button>
                        </Form>
                        
                    </div>
                    <Card >
                        <Card.Body>
                        <Row>
                                <Col><Nav variant="tabs" defaultActiveKey="#lists">
                                <Nav.Item>
                                    <Nav.Link href="#lists">Lists</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#groups">Group</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#settings">Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                                <Col></Col>
                                <Col>
                                <Link className="nav-link" to={'/list'} onClick={this.openModal}><PlusCircle color="gray" /> Add items</Link>
                            </Col>
                            </Row>
                            
                            <h4>Your Lists</h4>
                            <table className="table" style={{ marginTop: 10 }} >
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
                                    {/* { this.todoList() } */}
                                </tbody>
                            </table>
                        
                        </Card.Body>
                    </Card>
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
                                <Link className="nav-link" to={'/list'} onClick={this.openModal}><PlusCircle color="gray" /> Add items</Link>
                            </Col>
                            </Row>
                            <Row>
                            <h4>Your Items</h4>
                            <div className="grid-container">
                            {this.listInfo.map(this.renderList)}
                            </div>
                            </Row>
                           
                        
                        </Card.Body>
                    </Card>
                    <Modal show={this.state.modalShow} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add an item to your list</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><ListCreate /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        );
    }
}