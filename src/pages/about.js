import React, { Component } from "react";
import { Row, Container, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          
            <Container>
              <Row>
                <Col className="col-text">
                  <h4> Giftie.ph is an online gift registry and wish list site.</h4>
                  <h5>Our aim is to make gifting easier, convenient, purposeful and joyful – both for the giver and the celebrant. Having Giftie for any occasion gives the celebrant a platform to share his/her wants, needs and preferences so friends and loved ones will have an easier time getting the best gift for you.</h5>
                
                </Col>
                <Col>
                  <img src={require('../img/about_us.png')} className="rounded float-right img-responsive" width="80%" height="auto" />
                </Col>
              </Row>
            </Container>
         
        </Row>
      </Container>
    );
  }
}