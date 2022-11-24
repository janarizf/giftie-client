import React, { Component } from "react";
import { Container, Card,CardGroup } from 'react-bootstrap';

export default class Gift extends Component {
  render() {
    return (
      <Container>

        <Card>
          <Card.Header> <h4>Gift Ideas</h4></Card.Header>
          <Card.Body>
            <h5>Want some inspiration? Browse through our Gift Ideas and instantly add to your list using our Add to List button</h5>

          </Card.Body>
        </Card>
        <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/200/200" />
                        <Card.Body>
                            <Card.Title>Gift 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/200/200" />
                        <Card.Body>
                            <Card.Title>Gift 2</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/200/200" />
                        <Card.Body>
                            <Card.Title>Gift 3</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
      </Container>
    );
  }
}