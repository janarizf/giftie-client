import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import usersService from "../../services/users.service";
export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      photo: "",
      isView: true,
      isEdit: false,
      isGuest: false
    };
    this.loadUser = this.loadUser.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangeUserName(e) {
    this.setState({
      username: e.target.value
    });
  }
  async saveUser(e) {
    this.setState({
      isView: true,
      isEdit: false
    });
    var userData = await usersService.get(this.state._id);
    console.log("user data");
    console.log(userData);
    userData.data.firstname = this.state.firstname;
    userData.data.lastname = this.state.lastname;
    userData.data.username = this.state.username;
    userData.data.updatedby = this.state.firstname + " " + this.state.lastname;
    userData.data.updateddate = new Date();
    var updatedUser = await usersService.update(this.state._id, userData.data)
    localStorage.setItem('user', JSON.stringify(updatedUser.data));
  }

  updateUser(e) {
    this.setState({
      isView: false,
      isEdit: true
    })
  }
  async loadUser() {
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user') !== 'undefined') {
      var us = (JSON.parse(localStorage.getItem('user')));
      console.log(us);
      if (us.firstname === "Guest") {
        this.setState({
          firstname: us.firstname,
          isGuest: true
        }, () => {
          console.log(this.state);
        });
      }
      else {
        this.setState({
          _id: us._id,
          firstname: us.firstname,
          lastname: us.lastname,
          username: us.username,
          email: us.email,
          photo: us.photo
        }, () => {
          console.log(this.state);
        });
      }
    }
  }
  componentDidMount() {
    console.log("loaded");
    this.loadUser();
  }

  render() {
    return (
      <Container>
        <h4> Account Info</h4>
        <Form>
        <Button size="sm" variant="custom">Upload Image</Button>
          <Row className="m-3">
       
            <Col sm={2}>
              <Form.Label>Email</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control disabled={true} value={this.state.email} />
            </Col>

          </Row>
          <Row className="m-3">
            <Col sm={2}>
              <Form.Label>First Name</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control disabled={this.state.isView} value={this.state.firstname} onChange={this.onChangeFirstName} />
            </Col>

          </Row>
          <Row className="m-3">
            <Col sm={2}>
              <Form.Label>Last Name</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control disabled={this.state.isView} value={this.state.lastname} onChange={this.onChangeLastName} />
            </Col>

          </Row>
          <Row className="m-3">
            <Col sm={2}>
              <Form.Label>User Name</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control disabled={this.state.isView} value={this.state.username} onChange={this.onChangeUserName} />
            </Col>

          </Row>

          {this.state.isView &&
            <Button variant="custom" onClick={this.updateUser}>
              Update
            </Button>
          }
          {this.state.isEdit &&
            <Button variant="custom" onClick={this.saveUser} >
              Submit
            </Button>
          }

        </Form>
        {this.state.isGuest && <h5> Dont have an account?  <Link to={'/signup'}>
          Create one now.
        </Link></h5>}
      </Container>
    )
  };

}