import React, { Component } from "react";
import { Row, Container, Col, Button, Card } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default class Help extends Component {
  render() {
    return (
      <Container className="container-main">
        <Row className="row-text">
          <Col >
            <h2>Frequently Asked Questions</h2>

            <h4>What is a gift registry / wish list?</h4>
            <p>A gift registry / wish list / gift list  is a list of items that you wish and prefer to receive put together and shared to friends, family and/or event guests.
            </p>

            <h4>Why do I need a Giftie list?</h4>
            <p> For celebrants - a Giftie list will help you share to your loved ones the gift items that you truuuly need, want and/or prefer to receive.<br /> </p>
            <h5> Benefit:</h5>
            <p> Avoid duplicate gifts<br />
              Avoid unnecessary gifts<br />
              Avoid “wrong” gifts<br />
              Get gifts that you truly want and/or need<br />
            </p>

            <h5>For gift givers:</h5>
            <p> Save time and effort in thinking and searching for gifts that the celebrant needs or “will like”<br />
              Know that celebrant's preferences through the listed items<br />
            </p>

            <h5>  1. Can I add items that are only found in a physical store?</h5>
            <p> Yes, you can add items that are found in online store, physical store or both. If the store doesnt have an online shop or the item is not found in any online store, you can just put the details and manually upload the picture of the item in your list.<br />
            </p>

            <h5>  2. What if I need more than one of the same item?</h5>
            <p> You can customize the quantity of an item from 1 to unlimited. Similarly, your guest can reserve multiple items.<br /> </p>


            <h5> 3. Where can I share my Giftie list?</h5>
            <p>
              - You can add it in your Facebook profile (Facebook profile - Info - Links - Websites)<br />
              - Add to your Facebook Event Description<br />
              - Add to your invitation<br />
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}