import React, { Component } from "react";
import { Button, Row, Col, Image, Form } from 'react-bootstrap';
import btnImg from '../../img/img-placeholder.jpg'
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
        set_date: format(new Date(), 'yyyy-MM-dd')
      }
      console.log(this.state.user_id);
  }

  getUser(){
   var userObj = JSON.parse(localStorage.getItem('user'));
   if(userObj)
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

  async onSubmit(e) {
    var data = {
      name: this.state.name,
      user_id: this.state.user,
      status: this.state.status,
      category: this.state.category,
      introduction: this.state.introduction,
      location: this.state.location,
      set_date: this.state.set_date,
      status_id: 1,
      createdby: this.state.user,
      createddate: new Date(),
      updatedby: this.state.user,
      updateddate: new Date()
    };

    await listsService.create(data)
      .then(() => {

        // e.preventDefault();
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {
    const categoryData = [{ id: 1, value: "Birthday" }, { id: 2, value: "Wedding" }, { id: 3, value: "Christmas" }, { id: 4, value: "Baby Shower" }, { id: 5, value: "Housewarming" }, { id: 6, value: "Others" }];
    return (
      <Form className="formItem" onSubmit={this.onSubmit}>
        <Row>
          <Col sm>
            <Button>
              <Image src={btnImg} rounded width='200px' />
            </Button>
          </Col>
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
          </Col>
          <Col sm></Col>
          <Col sm>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}