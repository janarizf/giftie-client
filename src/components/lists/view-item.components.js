import React, { Component } from "react";
import { Button, Form, Card, Container, Modal } from 'react-bootstrap';
import { Facebook, Messenger, Instagram, Twitter } from 'react-bootstrap-icons';
import AddItem from "./add-item.component";
export default class ViewItem extends Component {
  constructor(props) {
    super(props);
    console.log(props.itemData[0])
    this.state = {
      list_id: props.itemData[0]._id,
      list_data: props.itemData[0],
      editItem: false,
    }
  }
  editItem = () => this.setState({ editItem: true });
  viewItem = () => this.setState({ editItem: false });
  imgSrc() {
    console.log(this.state.list_data.image);
    if (this.state.list_data.image.length > 0) {
      return "http://localhost:9000/lists/getImage/" + this.state.list_data.image[0].filename;
    } else {
      return require('../../img/giftie_question.png')
    }
  }
  render() {
    return (
      <Container >

        <Card className="m-3">
          <Card.Img src={this.imgSrc()} />
          <Card.Body>
            <Form>
            <Form.Label> Item: </Form.Label> {this.state.list_data.name}<br />
            <Form.Label> Website: </Form.Label>{this.state.list_data.website} <br />
            <Form.Label> Category: </Form.Label>{this.state.list_data.category_id}<br />
            <Form.Label> Note: </Form.Label>{this.state.list_data.note}<br />
            <Form.Label> Price: </Form.Label>{this.state.list_data.price}<br />
            <Form.Label> Quantity:</Form.Label> {this.state.list_data.quantity}<br />
            <Form.Label> Unlimited:</Form.Label> {this.state.list_data.unlimited}<br />
            <Form.Label> Added on: </Form.Label>{this.state.list_data.addedon}<br />

              {this.state.editItem && <Button><Facebook /><Messenger /><Instagram /><Twitter /></Button>}

              <Button variant="custom" onClick={this.viewItem}>Save</Button>
              <Button variant="custom" onClick={this.editItem}>Edit</Button>
            </Form>
          </Card.Body>

        </Card>

      </Container>

    );
  }
}
