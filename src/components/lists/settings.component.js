import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { Button, Row, Col, Form, Container, Image, ToggleButton, ButtonGroup, Figure } from 'react-bootstrap';
import listsService from "../../services/lists.service";
import { ImgUpload, CheckImgFile } from "../../helper"
import { format } from 'date-fns';
import { default_theme, baby_shower, wedding, birthday, christmas } from "../../themes/theme.style";


export default class ListSetting extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeSetDate = this.onChangeSetDate.bind(this);
    this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangePrivate = this.onChangePrivate.bind(this);
    this.onChangethemes = this.onChangethemes.bind(this);

    this.state = {
      _id: props.listId,
      list: [],
      user: this.getUser(),
      name: "",
      status: "",
      category: "",
      introduction: "",
      location: "",
      set_date: "",
      image: "",
      hasImage: false,
      imageSrc: [],
      imageUpload: [],
      themes: "",
      private: true

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
  onChangethemes(e) {
    this.setState({
      themes: e.target.value
    });
  }
  onChangePrivate(e) {
    this.setState({
      private: e.target.value
    });
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

  componentDidMount() {
    this.loadList();
  }
  loadList() {
    listsService.get(this.state._id)
      .then(response => {
        this.setState({
          list: response.data,
          name: response.data.name,
          set_date: format(new Date(response.data.set_date), 'yyyy-MM-dd'),
          status: response.data.status_id,
          category: response.data.category_id,
          introduction: response.data.introduction,
          location: response.data.location,
          themes: response.data.themes,
          private: response.data.private
        })
        if (response.data.image.length > 0) {
          this.setState({
            hasImage: true,
            imageSrc: [response.data.image],
          })
        }
        console.log(response.data.items)
      }
      )
      .catch(function (error) {
        console.log(error);
      })
  }
  onSubmit(e) {
    try {

      e.preventDefault();
      var data = {
        name: this.state.name,
        user_id: this.state.user,
        status: this.state.status,
        category_id: this.state.category,
        introduction: this.state.introduction,
        location: this.state.location,
        set_date: this.state.set_date,
        themes: this.state.themes,
        private: this.state.private,
        status_id: 1,
        updatedby: this.state.user,
        updateddate: new Date(),
      };


      if (this.state._id) {
        if (this.state.hasImage) {
          ImgUpload(this.state.imageUpload[0], function (uploaded) {
            const apiurl = process.env.REACT_APP_APIURL;
            data.image = apiurl + "lists/getImage/" + uploaded.data[0].filename;
            listsService.update(this.state._id, data)
              .then((respond) => {
                this.setState({
                  image: respond.data.image,
                  name: respond.data.name,
                  user_id: respond.data.user,
                  status: respond.data.status,
                  category_id: respond.data.category_id,
                  introduction: respond.data.introduction,
                  location: respond.data.location,
                  set_date: respond.data.set_date,
                  status_id: respond.data.status_id,
                  themes: respond.data.themes,
                  private: respond.data.private,
                  _id: respond.data._id
                })
                console.log(respond.data._id);
                alert("Updated wishlist " + respond.data.name)
                this.loadList();
                window.location.reload();
              })
          }.bind(this))
        }
        else {
          listsService.update(this.state._id, data)
            .then((respond) => {
              this.setState({
                image: respond.data.image,
                name: respond.data.name,
                user_id: respond.data.user,
                status: respond.data.status,
                category_id: respond.data.category_id,
                introduction: respond.data.introduction,
                location: respond.data.location,
                set_date: respond.data.set_date,
                status_id: respond.data.status_id,
                themes: respond.data.themes,
                private: respond.data.private,
                _id: respond.data._id
              })
              console.log(respond.data._id);
              alert("Updated wishlist " + respond.data.name)
              this.loadList();
              window.location.reload();
            })
        }



      }

    }
    catch (error) {
      console.log(error)
    }

  }
  render() {
    const categoryData = [{ id: 1, value: "Birthday" }, { id: 2, value: "Wedding" }, { id: 3, value: "Christmas" }, { id: 4, value: "Baby Shower" }, { id: 5, value: "Housewarming" }, { id: 6, value: "Others" }];
    const radios = [
      { name: 'Birthday', value: 'birthday' },
      { name: 'Wedding', value: 'wedding' },
      { name: 'Baby Shower', value: 'baby_shower' },
      { name: 'Christmas', value: 'christmas' },
      { name: 'Default', value: 'default_theme' }
    ];

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Row className="m-3">
                <Col sm={2}>
                  <Form.Label>  Theme:</Form.Label>
                </Col>
                <Col sm={10}>

                  <ButtonGroup>
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={'outline-primary'}
                        name={radio.name}
                        value={radio.value}
                        checked={this.state.themes === radio.value}
                        onChange={this.onChangethemes}>
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Col>
              </Row>
              {this.state.themes == "custom"
                && <Row className="m-3">
                  <Col sm={2}>
                    <Form.Label htmlFor="exampleColorInput">Custom Theme</Form.Label>
                  </Col>
                  <Col sm={10}>
                    <Form.Control
                      type="color"
                      id="exampleColorInput"
                      defaultValue="#563d7c"
                      title="Choose your color"
                    />
                  </Col>
                </Row>}
              <Row className="m-3">
                <Col sm={2}>
                  <Form.Label>  List:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control placeholder="Wishlist" name="name" required value={this.state.name} onChange={this.onChangeName} />
                </Col>
              </Row>
              <Row className="m-3">
                <Col sm={2}>
                  <Form.Label>  Image:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="file" accept=".png, .jpg, .jpeg" name="photo" id="input-file" onChange={this.onChangeImage} />
                  {this.state.image && this.state.imageSrc}
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
                  <Form.Label>  Set Date:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="date" name='set_date' value={this.state.list.set_date && this.state.list.set_date.substring(0, 10)} onChange={this.onChangeSetDate} />
                </Col>
              </Row>
              <Row className="m-3">
                <Col sm={2}>
                  <Form.Label>  Location:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control placeholder="Add Location" name="location" value={this.state.location} onChange={this.onChangeLocation} />
                </Col>
              </Row>
              <Row className="m-3">
                <Col sm={2}>
                  <Form.Label>  Introduction:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control placeholder="Introduction" name="introduction" value={this.state.introduction} onChange={this.onChangeIntroduction} />
                </Col>
              </Row>
              <Row className="m-3">
                <Col sm={2}>
                  <Form.Label>  Category:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Select name="list" value={this.state.category} onChange={this.onChangeCategory} required>
                    <option value="">Category</option>
                    {
                      categoryData.map(function (category) {
                        return <option key={category.id} value={category.id} >{category.value}</option>
                      })
                    }
                  </Form.Select>
                </Col>
              </Row>
              <Row className="m-3">
                <Col sm={2}>
                  <Form.Label>  Private:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Check type='switch' id="privateBool" name="private" checked={this.state.private} onChange={this.onChangePrivate} />
                </Col>
              </Row>

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