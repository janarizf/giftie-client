import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import listsService from "../../services/lists.service";
export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeUnlimited = this.onChangeUnlimited.bind(this);
    this.saveItems = this.saveItems.bind(this);

    this.state = {
      list_id: props.listData._id,
      list_data: props.listData,
      name: "",
      website: "",
      category: "",
      image: [],
      note: "",
      price: 0,
      quantity: 1,
      unlimited: false,
      hasImage: false,
      imageSrc: []
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  deleteImage(e) {
    const ImagesArray = this.state.imageSrc.filter((item, index) => index !== e);
    this.setState({
      hasImage: true,
      imageSrc: ImagesArray
    });
  }
  onChangeImage(e) {
    let file = e.target.files[0];

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      window.alert("File does not support. You must use .png or .jpg ");
      return false;
    }
    if (file.size > 10e6) {
      window.alert("Please upload a file smaller than 10 MB");
      return false;
    }

    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(URL.createObjectURL(e.target.files[0]));
    this.setState({
      hasImage: true,
      imageSrc: ImagesArray
    });
  }

  onChangeNote(e) {
    this.setState({
      note: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  onChangeUnlimited(e) {
    this.setState({
      unlimited: e.target.value
    });
  }

  async saveItems() {
    var data = {
      list_id: this.state.list_id,
      name: this.state.name,
      website: this.state.website,
      category: this.state.category,
      image: this.state.image,
      note: this.state.note,
      price: this.state.price,
      quantity: this.state.quantity,
      unlimited: this.state.unlimited,
      addedon: new Date()
    };
    this.state.list_data.updatedby = "admin";
    this.state.list_data.updateddate = new Date();
    await this.state.list_data.items.push(data)
    await listsService.update(data.list_id, this.state.list_data)
      .then(response => {
        this.setState({
          id: response.data.id,
          list_id: response.data.list_id,
          name: response.data.name,
          website: response.data.website,
          category_id: response.data.category_id,
          image: response.data.image,
          note: response.data.note,
          price: response.data.price,
          quantity: response.data.quantity,
          unlimited: response.data.unlimited,
          submitted: true,
          hasImage: false
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    console.log(data);
  }
  render() {
    const itemCategoryData = [{ id: 1, value: "Clothes" }, { id: 2, value: "Gadgets" }, { id: 3, value: "Food" }, { id: 4, value: "Appliances" }, { id: 5, value: "Others" }]; return (
      <Form onSubmit={this.saveItems}>
        <Form.Group controlId="1">
          <Form.Label>Add to List</Form.Label>
          <Form.Control placeholder="Disabled input" disabled value={this.state.list_data.name} />
          <Form.Label>What would you like?</Form.Label>
          <Form.Control placeholder="e.g. toys, chocolates, essentials etc.." name="name" required value={this.state.name} onChange={this.onChangeName} />
          <Form.Label>Website item link (optional)</Form.Label>
          <Form.Control placeholder="https://" name="website" value={this.state.website} onChange={this.onChangeWebsite} />
          <Form.Label>Item Category</Form.Label>
          <Form.Select value={this.state.category} onChange={this.onChangeCategory} required >
            <option value="">Category</option>
            {
              itemCategoryData.map(function (category) {
                return <option key={category.id} value={category.id} >{category.value}</option>
              })
            }

          </Form.Select>
          <Form.Label>Images (optional)</Form.Label>
          <Form.Control type="file" multiple name="image" value={this.state.image} onChange={this.onChangeImage} />

          {this.state.hasImage &&
            this.state.imageSrc.map((item, index) => {
              return (
                <div key={item}>
                  <img src={item} alt="" width="100" height="auto" />
                 {/*  <button type="button" onClick={() => this.deleteImage(index)}>
                    delete
                  </button> */}
                </div>
              );
            })}
          <Form.Label>Note (optional)</Form.Label>
          <Form.Control placeholder="explain what do you prefer for that item" name="note" value={this.state.note} onChange={this.onChangeNote} />
          <Form.Label>Max Pricing (optional)</Form.Label>
          <Form.Control type="number" name="price" value={this.state.price} onChange={this.onChangePrice} />
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="0" value={this.state.quantity} onChange={this.onChangeQuantity} />
          <Form.Check type='checkbox' label="Unlimited Item" name="unlimited" value={this.state.unlimited} onChange={this.onChangeUnlimited} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    );
  }
}
