import React, { Component } from "react";
import { Navigate, Link } from 'react-router-dom';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';
import listsService from "../../services/lists.service";
import { format } from 'date-fns';
export default class ListCreate extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeSetDate = this.onChangeSetDate.bind(this);
    this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user: this.getUser(),
      name: "Wishlist",
      status: "1",
      category: "",
      introduction: "",
      location: "",
      set_date: format(new Date(), 'yyyy-MM-dd'),
      redirect: false,
      _id: ""
    }

    if (props.listData) {
      this.state = {
        name: props.listData.name,
        status: props.listData.status_id,
        category: props.listData.category_id,
        introduction: props.listData.introduction,
        location: props.listData.location,
        set_date: format(new Date(props.listData.set_date), 'yyyy-MM-dd'),
        _id: props.listData._id
      }

    }

    console.log(this.state.user);
  }

  getUser() {
    var userObj = JSON.parse(localStorage.getItem('user'));
    if (userObj)
      return userObj._id
    return "Guest";
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  onChangeIntroduction(e) {
    this.setState({
      introduction: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeSetDate(e) {
    this.setState({
      set_date: e.target.value
    });
  }

  onSubmit(e) {
    try {

      var data = {
        name: this.state.name,
        user_id: this.state.user,
        status: this.state.status,
        category_id: this.state.category,
        introduction: this.state.introduction,
        location: this.state.location,
        set_date: this.state.set_date,
        status_id: 1,
        createdby: this.state.user,
        createddate: new Date(),
        updatedby: this.state.user,
        updateddate: new Date()
      };
      if (this.state._id) {
        listsService.update(this.state._id, data)
          .then((respond) => {
            this.setState({
              name: respond.data.name,
              user_id: respond.data.user,
              status: respond.data.status,
              category_id: respond.data.category_id,
              introduction: respond.data.introduction,
              location: respond.data.location,
              set_date: respond.data.set_date,
              status_id: respond.data.status_id,
              _id: respond.data._id,
              redirect: true
            })
            console.log(respond.data._id);
            alert("Updated wishlist " + respond.data.name)
          })
      }
      else {
        e.preventDefault();
        listsService.create(data)
          .then((respond) => {
            this.setState({
              name: respond.data.name,
              user_id: respond.data.user,
              status: respond.data.status,
              category_id: respond.data.category_id,
              introduction: respond.data.introduction,
              location: respond.data.location,
              set_date: respond.data.set_date,
              status_id: respond.data.status_id,
              _id: respond.data._id,
              redirect: true
            })
            console.log(respond);
            alert("Created new wishlist " + respond.data.name)
          })
      }

    }
    catch (error) {
      console.log(error)
    }
  }
  render() {
    const categoryData = [{ id: 1, value: "Birthday" }, { id: 2, value: "Wedding" }, { id: 3, value: "Christmas" }, { id: 4, value: "Baby Shower" }, { id: 5, value: "Housewarming" }, { id: 6, value: "Others" }];
    return (
      <Container>
        {this.state.redirect && <Navigate to={"/list/" + this.state._id} />}
        <Form className="formItem" onSubmit={this.onSubmit}>
          <Row>
            {/* <Col sm>
            <Button>
              <Image src={btnImg} rounded width='200px' />
            </Button>
          </Col> */}
            <Col sm>
              <Form.Control placeholder="Wishlist" name="name" required value={this.state.name} onChange={this.onChangeName} />
              <Form.Control type="date" name='set_date' value={this.state.set_date} onChange={this.onChangeSetDate} />
              <Form.Control placeholder="Add Location" name="location" value={this.state.location} onChange={this.onChangeLocation} />
              <Form.Control placeholder="Introduction" name="introduction" value={this.state.introduction} onChange={this.onChangeIntroduction} />
              <Form.Select name="list" value={this.state.category} onChange={this.onChangeCategory} required>
                <option value="">Category</option>
                {
                  categoryData.map(function (category) {
                    return <option key={category.id} value={category.id} >{category.value}</option>
                  })
                }
              </Form.Select>

              <Button variant="custom" type="submit">
                Save
              </Button>

            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}