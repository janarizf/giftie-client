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
      imageSrc: [],
      imageUpload: [],
      base64Image: "",
      isEdit: false,
      link_img: ""
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value,
      link_img: e.target.value
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
        image: [],
        note: this.state.note,
        price: this.state.price,
        quantity: this.state.quantity,
        unlimited: this.state.unlimited,
        addedon: new Date(),
        taken: false,
        reservedby : "",
        reserved : false
      };
      if (!this.state.hasImage) {
        this.state.list_data.items.push(data)
        listsService.update(this.state.list_data._id, this.state.list_data)
          .then((response) => {
            this.setState({
              list_id: response.data._id,
              list_data: response.data,
              hasImage: false
            });
            console.log(response.data._id);
            alert("Added item " + data.name);
            window.location.reload(true);
          });
      }
      else {
        var imgUploaded = this.imageUpload();
        imgUploaded.then(function (uploaded) {

          data.image = [{
            id: uploaded.data[0].id,
            filename: uploaded.data[0].filename
          }];
          console.log(data.image)
          // this.state.list_data.updatedby = "admin";
          //this.state.list_data.updateddate = new Date();
          this.state.list_data.items.push(data)
          listsService.update(this.state.list_data._id, this.state.list_data)
            .then((response) => {
              console.log(response.data);
              this.setState({
                list_id: response.data._id,
                list_data: response.data,
                hasImage: false
              });

              console.log(response.data._id);
              alert("Added item " + data.name);
              window.location.reload(true);
            })
        }.bind(this));
      }
    } catch (error) {
      console.log(error);
    }
    ///await not working for images


  }
  render() {
    const itemCategoryData = [{ id: 1, value: "Clothes" }, { id: 2, value: "Gadgets" }, { id: 3, value: "Food" }, { id: 4, value: "Appliances" }, { id: 5, value: "Others" }];
    return (
      <Form onSubmit={this.saveItems} encType="multipart/form-data">
        <Form.Group>
          <Form.Label>Add to List</Form.Label>
          <Form.Control placeholder="Disabled input" disabled={true} value={this.state.list_data.name} />
          <Form.Label>What would you like?</Form.Label>
          <Form.Control placeholder="e.g. toys, chocolates, essentials etc.." disabled={this.state.isEdit} name="name" required value={this.state.name} onChange={this.onChangeName} />
          <Form.Label>Website item link (optional)</Form.Label>
          <Form.Control placeholder="https://" name="website" value={this.state.website} disabled={false} onChange={this.onChangeWebsite} />
          {this.state.link_img &&
            <div>
              <img src={this.state.link_img} alt="" width="100" height="auto" />
            </div>
          }
          <Form.Label>Item Category</Form.Label>
          <Form.Select value={this.state.category} onChange={this.onChangeCategory} disabled={false} required >
            <option key="0" value="">Category</option>
            {
              itemCategoryData.map(function (category, index) {
                return <option key={index} value={category.id} >{category.value}</option>
              })
            }

          </Form.Select>
          <Form.Label>Images (optional)</Form.Label>
          <Form.Control type="file" accept=".png, .jpg, .jpeg" disabled={false} name="image" id="input-file" onChange={this.onChangeImage} />

          {this.state.hasImage &&
            this.state.imageSrc.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} alt="" width="100" height="auto" />
                  {/*  <button type="button" onClick={() => this.deleteImage(index)}>
                    delete
                  </button> */}
                </div>
              );
            })
          }
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
