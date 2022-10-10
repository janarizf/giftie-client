import React, { Component } from "react";
import { Card, CardGroup, Button, Row, Container, Image, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default class home extends Component {
  render() {
    const listInfo = [
      { image: "https://picsum.photos/200", title: "List 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
      { image: "https://picsum.photos/200", title: "List 2", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
      { image: "https://picsum.photos/200", title: "List 3", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
      { image: "https://picsum.photos/200", title: "List 4", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", link: "#" },
    ];
    const renderList = (card, index) => {
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

    return (
      <main>
        <Row>
          <div class="jumbotron jumbotron-fluid">
          <Container>
              <Row>
                <Col className="col-text">
                  <h1>Wishcart.</h1>
                  <h2>Always there for you to <text className="jumbotron-manage">manage</text> and</h2>
                  <h2><text className="jumbotron-organize">organize</text> for any occasion.</h2>
                  <Button href="#" variant="flat">Go to my list  <ArrowRightCircle color="white" /></Button>
                </Col>
                <Col>
                  <img src={require('../img/cart.png') } className="rounded float-right img-responsive" width="80%" height="auto"/>
                </Col>
              </Row>
              </Container>
          </div>
        </Row>
        <Container>
          <Row><img src={require('../img/infobanner.png')}/></Row>
          <Row>
            <h4>Starter List</h4>
            <div className="grid-container">
              {listInfo.map(renderList)}
            </div>
          </Row>
          <Row>
          <h4>Mostly used by our users for occasion</h4>
            <div className="grid-container">
              {listInfo.map(renderList)}
            </div>
          </Row>
        </Container>
      </main>
    );
  }
}