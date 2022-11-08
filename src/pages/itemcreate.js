import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import listsService from "../services/lists.service";
export default class ListCreate extends Component {
    constructor(props) {
        super(props);

        this.state ={
        list_id:"",
        name:"",
        website:"",
        category_id:"",
        image:"",
        note:"",
        price:0,
        quantity:0,
        unlimited:false
        }
    }
    saveItems() {
        var data = {
          list_id:this.state.list_id,
          name:this.state.name,
          website:this.state.website,
          category_id:this.state.category_id,
          image:this.state.image,
          note:this.state.note,
          price:this.state.price,
          quantity:this.state.quantity,
          unlimited:this.state.unlimited
        };
    
        listsService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              list_id:response.data.list_id,
              name:response.data.name,
              website:response.data.website,
              category_id:response.data.category_id,
              image:response.data.image,
              note:response.data.note,
              price:response.data.price,
              quantity:response.data.quantity,
              unlimited:response.data.unlimited,
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    render() {
        return (
            <Form>
                <Form.Group controlId="1">
                    <Form.Label>Add to List</Form.Label>
                    <Form.Select aria-label="Default select example"  name="list">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Label>What would you like?</Form.Label>
                    <Form.Control placeholder="e.g. toys, chocolates, essentials etc.." required name="name"/>
                    <Form.Label>Website item link (optional)</Form.Label>
                    <Form.Control placeholder="https://"  name="website"/>
                    <Form.Label>Item Category</Form.Label>
                    <Form.Select aria-label="Default select example"  name="category">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Label>Images (optional)</Form.Label>
                    <Form.Control type="file" name="image" />
                    <Form.Label>Note (optional)</Form.Label>
                    <Form.Control placeholder="explain what do you prefer for that item" name="note"/>
                    <Form.Label>Max Pricing (optional)</Form.Label>
                    <Form.Control type="number" name="price"/>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="quantity"/>
                    <Form.Check type='checkbox' label="Unlimited Item" name="unlimited"/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.saveItems}>
                    Submit
                </Button>
            </Form>

        );
    }
}
