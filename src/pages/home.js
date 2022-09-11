import React, { Component } from "react";
import { Card, CardGroup, Button, Row, Container, Image, Col } from 'react-bootstrap';

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
                  <a class="btn btn-primary btn-sm" href={card.list} role="button">Go to my list</a>
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
            <div class="container">
              <Row>
                <Col>
                  <h1 class="display-4">Wishcart.</h1>
                  <p class="lead">Always there for you to manage and</p>
                  <p>organize for any occasion.</p>
                  <a class="btn btn-primary btn-sm" href="#" role="button">Go to my list</a>
                </Col>
                <Col>
                  <img src={require('../img/cart.jpg') } className="rounded float-right img-responsive" width="80%" height="auto"/>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
        <Container>
          <Row><img src={require('../img/infobanner.png')} /></Row>
          <Row>
            <h4>Starter List</h4>
            <div className="grid-container">
              {listInfo.map(renderList)}
            </div>
          </Row>
        </Container>
      </main>
    );
  }
}