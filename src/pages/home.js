import React, { Component } from "react";
import { Card, Button, Row, Container, Col, Image } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default class home extends Component {
  render() {
    return (
      <main>
        <Row>
          <div className="jumbotron jumbotron-fluid p-5">
            <Container>
              <Row>
                <Col className="col-text">
                  <h1>Great gifts – Always.</h1>
                  <h5>Giftie is the Ultimate Wish List Maker to help you</h5>
                  <h5>give and receive great gifts for any celebration.</h5>
                  <Button size="lg" href="/account" variant='custom'>How it Works  <ArrowRightCircle color="white" /></Button>
                </Col>
                <Col>
                  <Image className="img-banner" src={require('../img/girl_gift.png')}/>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        <Container >
          <Row className="row-text text-center">
            <h2>Why use Giftie?</h2>
            <Col>  <Image src={require('../img/purposeful_box.png')} /></Col>
            <Col>  <Image src={require('../img/practical_box.png')} /></Col>
            <Col>  <Image src={require('../img/easy_box.png')} /></Col>
          </Row>
          <Row className="container-main row-text text-center">
            <h2>How? Create and Share</h2>
            <Col>  <Image src={require('../img/create_box.png')} /></Col>
            <Col>  <Image src={require('../img/add_box.png')} /></Col>
            <Col>  <Image src={require('../img/share_box.png')} /></Col>
          </Row>
          <Row className="container-green-bg row-text text-center">
            <h2>Jumpstart using a starter list</h2>
            <p> Specially curated for your special celebration</p>
            <Col>  <Image src={require('../img/create_box.png')} /></Col>

          </Row>
          <Row className="row-text text-center">
            <Row>
              <h2>Why you'll love Giftie</h2>
              <p>
                Awesome features designed to make your gifting <br />
                experience more convenient and truly joyful.
              </p>
            </Row>
            <Row>
              <Col>  <Image src={require('../img/unli_box.png')} /></Col>
              <Col>  <Image src={require('../img/reserve_box.png')} /></Col>
              <Col>  <Image src={require('../img/custom_box.png')} /></Col>
            </Row>
            <Row>
              <Col>  <Image src={require('../img/easyshare_box.png')} /></Col>
              <Col>  <Image src={require('../img/occassion_box.png')} /></Col>
              <Col>  <Image src={require('../img/free_box.png')} /></Col>
            </Row>
          </Row>
          <Row className="container-main row-text text-center">
            <h2>A Giftie List for any celebration</h2>
            <p>The ultimate gift registry for your special occasion.</p>
          </Row>

        </Container>
      </main>
    );
  }
}