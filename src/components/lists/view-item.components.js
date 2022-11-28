import React, { Component } from "react";
import { Button, Form, Card } from 'react-bootstrap';
import { Facebook, Messenger, Instagram, Twitter } from 'react-bootstrap-icons';
export default class ViewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list_id: props.itemData[0]._id,
      list_data: props.itemData[0],

    }
  }

  render() {
    return (
      <Form >
        <Form.Group controlId="1">
          <Card className="m-3">
            <Card.Img src={this.state.list_data.image} />
            <Card.Title>{this.state.list_data.name}</Card.Title>
            <Card.Body>
             
              <Card.Text>
               
                Website: {this.state.list_data.website} <br/>
               Category: {this.state.list_data.category}<br/>
               Images: {this.state.list_data.image}<br/>
               Note: {this.state.list_data.note}<br/>
               Price: {this.state.list_data.price}<br/>
               Quantity: {this.state.list_data.quantity}<br/>
               Unlimited: {this.state.list_data.unlimited}<br/>
               Added on: {this.state.list_data.addedon}<br/>
              </Card.Text>
            </Card.Body>
          </Card>
        </Form.Group>
        <Button><Facebook /><Messenger /><Instagram /><Twitter /></Button>
      </Form>

    );
  }
}
