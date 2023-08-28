import React, { Component } from "react";
import { Row, Container, Col, Button, Image } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row className="row-text">
          <Col>
            <h2>About Us</h2>
            <p> Giftie.ph is an online gift registry and wish list site.</p>
            <p>Our aim is to make gifting easier, convenient, purposeful and joyful – both for the giver and the celebrant. Having Giftie for any occasion gives the celebrant a platform to share his/her wants, needs and preferences so friends and loved ones will have an easier time getting the best gift for you.</p>

          </Col>
          <Col>
          <Image src={require('../../img/about_us.png')} /> 
          </Col>
        </Row>
        <Row className="container-green-bg row-text text-center">
          <h2>Why use Giftie?</h2>
          <Col>  <Image src={require('../../img/purposeful_box.png')} /></Col>
          <Col>  <Image src={require('../../img/practical_box.png')} /></Col>
          <Col>  <Image src={require('../../img/easy_box.png')} /></Col>
        </Row>
        <Row className="container-main row-text text-center">
          <Row>
            <h2>Why you'll love Giftie</h2>
            <p>
              Awesome features designed to make your gifting <br />
              experience more convenient and truly joyful.
            </p>
          </Row>
          <Row>
            <Col>  <Image src={require('../../img/unli_box.png')} /></Col>
            <Col>  <Image src={require('../../img/reserve_box.png')} /></Col>
            <Col>  <Image src={require('../../img/custom_box.png')} /></Col>
          </Row>
          <Row>
            <Col>  <Image src={require('../../img/easyshare_box.png')} /></Col>
            <Col>  <Image src={require('../../img/occassion_box.png')} /></Col>
            <Col>  <Image src={require('../../img/free_box.png')} /></Col>
          </Row>
        </Row>
      </Container>

    );
  }
}