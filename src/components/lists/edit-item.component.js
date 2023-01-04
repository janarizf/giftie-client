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
    this.imageUpload = this.imageUpload.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.state = {
      list_id: props.listData._id,
      list_data: props.listData,
      item_data: props.itemData,
      name: props.itemData.name,
      website: props.itemData.website,
      category: props.itemData.category_id,
      image: props.itemData.image,
      note: props.itemData.note,
      price: props.itemData.price,
      quantity: props.itemData.quantity,
      unlimited: props.itemData.unlimited,
      hasImage: false,
      imageSrc: [],
      imageUpload: [],
      base64Image: "",
      isEdit: false
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

  deleteImage() {
    this.setState({
      image: []
    });
  }

  imgSrc() {
    console.log(this.state.image);
    if (this.state.image.length > 0) {
      return "http://localhost:9000/lists/getImage/" + this.state.image[0].filename;
    } else {
      return ""
    }
  }

  async onChangeImage(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) => {
      if (e[1].type !== "image/png" && e[1].type !== "image/jpeg") {
        window.alert("File does not support. You must use .png or .jpg ");
        return false;
      }
      if (e[1].size > 10e6) {
        window.alert("Please upload a file smaller than 10 MB");
        return false;
      }
      return URL.createObjectURL(e[1]);
    });

    console.log(e.target.files);
    console.log(ImagesArray);
    this.setState({
      hasImage: true,
      imageSrc: ImagesArray,
      image: e.target.value,
      imageUpload: e.target.files
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
  async imageUpload() {
    const selectedFile = document.getElementById("input-file").files[0];
    return listsService.fileupload(selectedFile)
      .then((res) => {
        return res
      });

  }

  saveItems(e) {
    try {
      e.preventDefault();
      var data = {
        list_id: this.state.list_id,
        name: this.state.name,
        website: this.state.website,
        category_id: this.state.category,
        image: this.state.image,
        note: this.state.note,
        price: this.state.price,
        quantity: this.state.quantity,
        unlimited: this.state.unlimited,
        addedon: new Date(),
        taken: false
      };
      if (this.state.image.length == 0) {
        this.state.list_data.items.push(data)
        listsService.update(this.state.list_data._id, this.state.list_data)
          .then((response) => {
            this.setState({
              //  list_id: response.data._id,
              //list_data: response.data,
              hasImage: false
            });
            return;
          });
      }
      else {
      /*   var imgUploaded = this.imageUpload();
        imgUploaded.then(function (uploaded) {

          data.image = [{
            id: uploaded.data[0].id,
            filename: uploaded.data[0].filename
          }];
          console.log(data.image) */
          // this.state.list_data.updatedby = "admin";
          //this.state.list_data.updateddate = new Date();
         var objIndex = this.state.list_data.items.findIndex((obj => obj._id == this.state.item_data._id));
      console.log(objIndex);
         this.state.list_data.items[objIndex] = data;
          listsService.update(this.state.list_data._id, this.state.list_data)
            .then((response) => {
              console.log(response.data);
              this.setState({
                list_id: response.data._id,
                list_data: response.data,
                hasImage: false
              });
            })
       // }.bind(this));
      }
    } catch (error) {
      console.log(error);
    }
    ///await not working for images


  }
  render() {
    const itemCategoryData = [{ id: 1, value: "Clothes" }, { id: 2, value: "Gadgets" }, { id: 3, value: "Food" }, { id: 4, value: "Appliances" }, { id: 5, value: "Others" }]; return (
      <Form onSubmit={this.saveItems} encType="multipart/form-data">
        <Form.Group>
          <Form.Label>Add to List</Form.Label>
          <Form.Control placeholder="Disabled input" disabled={true} value={this.state.list_data.name} />
          <Form.Label>What would you like?</Form.Label>
          <Form.Control placeholder="e.g. toys, chocolates, essentials etc.." disabled={this.state.isEdit} name="name" required value={this.state.name} onChange={this.onChangeName} />
          <Form.Label>Website item link (optional)</Form.Label>
          <Form.Control placeholder="https://" name="website" value={this.state.website} disabled={false} onChange={this.onChangeWebsite} />
          <Form.Label>Item Category</Form.Label>
          <Form.Select value={this.state.category} onChange={this.onChangeCategory} disabled={false} required >
            <option key="0" value="">Category</option>
            {
              itemCategoryData.map(function (category, index) {
                return <option key={index} value={category.id} >{category.value}</option>
              })
            }

          </Form.Select>
          <Form.Label>Images (optional)</Form.Label> <br />

          {this.state.image.length == 0 &&
            <Form.Control type="file" accept=".png, .jpg, .jpeg" disabled={false} name="image" id="input-file" onChange={this.onChangeImage} />
          }
          {this.state.image.length > 0 &&
            <Form.Label>
              <img src={this.imgSrc()} alt="" width="100" height="auto" />
              <Button variant="outline-danger" size="sm" onClick={this.deleteImage}>Delete</Button>

            </Form.Label>}


          <br />

          {/* {this.state.hasImage && <Button variant="custom" onClick={this.imageUpload}>upload</Button>}<br/> */}
          <Form.Label>Note (optional)</Form.Label>
          <Form.Control placeholder="explain what do you prefer for that item" name="note" disabled={false} value={this.state.note} onChange={this.onChangeNote} />
          <Form.Label>Max Pricing (optional)</Form.Label>
          <Form.Control type="number" name="price" value={this.state.price} disabled={false} onChange={this.onChangePrice} />
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="0" disabled={false} value={this.state.quantity} onChange={this.onChangeQuantity} />
          <Form.Check type='checkbox' label="Unlimited Item" name="unlimited" disabled={false} value={this.state.unlimited} onChange={this.onChangeUnlimited} />
        </Form.Group>
        <Button variant="custom" type="submit">
          Submit
        </Button>
      </Form>

    );
  }
}
