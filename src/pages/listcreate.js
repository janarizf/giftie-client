import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
export default class ListCreate extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="1">
                    <Form.Label>Add to List</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Label>What would you like?</Form.Label>
                    <Form.Control placeholder="e.g. toys, chocolates, essentials etc.." />
                    <Form.Label>Website item link (optional)</Form.Label>
                    <Form.Control placeholder="https://" />
                    <Form.Label>Images (optional)</Form.Label>
                    <Form.Control type="file" name="file" />
                    <Form.Label>Note (optional)</Form.Label>
                    <Form.Control placeholder="explain what do you prefer for that item" />
                    <Form.Label>Max Pricing (optional)</Form.Label>
                    <Form.Control type="number" />
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" />
                    <Form.Check type='checkbox' label="Unlimited Item" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        );
    }
}