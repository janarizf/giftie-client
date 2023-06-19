import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Form, Button, Col, Row, Figure } from 'react-bootstrap';
import usersService from "../../services/users.service";
import listsService from "../../services/lists.service";
import { ImgUpload, CheckImgFile } from "../../helper"
import SignUp from '../login/signup.component';
export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      photo: [],
      isView: true,
      isEdit: false,
      isGuest: false,
      hasImage: false,
      imageSrc: [],
      imageUpload: []
    };
    this.loadUser = this.loadUser.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  onChangeImage(e) {
    CheckImgFile(e, function (ImagesArray) {
      console.log(e.target.files);
      console.log(ImagesArray);
      this.setState({
        hasImage: true,
        imageSrc: ImagesArray,
        imageUpload: e.target.files
      });
    }.bind(this))
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

    var userData = await usersService.get(this.state._id);
    console.log("user data");
    console.log(userData);
    userData.data.firstname = this.state.firstname;
    userData.data.lastname = this.state.lastname;
    userData.data.username = this.state.username;
    userData.data.updatedby = this.state.firstname + " " + this.state.lastname;
    userData.data.updateddate = new Date();

    if (this.state.hasImage) {

      const selectedFile = document.getElementById("input-file").files[0];
      ImgUpload(selectedFile, function (uploaded) {

        const apiurl = process.env.REACT_APP_APIURL;
        const imgSrc = apiurl + "lists/getImage/" + uploaded.data[0].filename;
        console.log(userData.data.photo)
        console.log(imgSrc);
        userData.data.photo = imgSrc;
        usersService.update(this.state._id, userData.data)
          .then((updatedUser) => {
            localStorage.setItem('user', JSON.stringify(updatedUser.data));
            this.setState({
              isView: true,
              isEdit: false,
              hasImage: false,
              firstname: updatedUser.data.firstname,
              lastname: updatedUser.data.lastname,
              username: updatedUser.data.username,
              email: updatedUser.data.email,
              photo: updatedUser.data.photo
            });
          })

      }.bind(this));


    }
    else {
      usersService.update(this.state._id, userData.data)
        .then((updatedUser) => {
          localStorage.setItem('user', JSON.stringify(updatedUser.data));
          this.setState({
            isView: true,
            isEdit: false,
            hasImage: false,
            firstname: updatedUser.data.firstname,
            lastname: updatedUser.data.lastname,
            username: updatedUser.data.username,
            email: updatedUser.data.email,
            photo: updatedUser.data.photo
          });
        })


    }


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
        {!this.state.isGuest &&
          <Form>

            <Row className="m-3">
              <Col sm={2}>
                <Form.Label>Photo</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="file" accept=".png, .jpg, .jpeg" disabled={this.state.isView} name="photo" id="input-file" onChange={this.onChangeImage} />
                {this.state.hasImage &&
                  this.state.imageSrc.map((item, index) => {
                    return (
                      <div key={index}>
                 
                        <Figure>
                            <Figure.Image src={item} width={150} height={150} />
                          </Figure>
                        {/*  <button type="button" onClick={() => this.deleteImage(index)}>
                    delete
                  </button> */}
                      </div>
                    );
                  })
                }
              </Col>

            </Row>
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
          </Form>}
        {this.state.isGuest && <SignUp />}
      </Container>
    )
  };

}