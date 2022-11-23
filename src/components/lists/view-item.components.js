import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import { PlusCircle, Facebook, Messenger, Instagram, Twitter } from 'react-bootstrap-icons';
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
        {this.state.list_data._id}
         {this.state.list_data.name}
          
        </Form.Group>
        <h2><Button><Facebook /><Messenger /><Instagram /><Twitter /></Button> </h2>
      </Form>

    );
  }
}
