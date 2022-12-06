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
      imageSrc: [],
      imageUpload: [],
      base64Image:""
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

  convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(
          fileReader.result.split(',')[1]
         );
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await this.convertToBase64(file);
    this.setState({base64Image: base64});
  };

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
     // this.imageUpload(e[1]);
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

  async fileToBase64(file) {
    return new Promise((resolve, reject) => {
     if (!file.type.match('image')) {
      return reject(new Error('INVALID_FILE'));
     }
   
     if (!file.type.match('jpeg') && !file.type.match('jpg') && !file.type.match('png')) {
      return reject(new Error('INVALID_FILE'));
     }
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = function() {
      const base64data = reader.result;
      resolve(base64data);
     };
    });
   }


 async imageUpload() {
  var uploadedimg = await listsService.fileupload(this.state.base64Image);
/*     var image = {
      name: "",
      image: "",
      size: 0,
      type: ""
    };
 
      image.name = img.name;
      image.size = img.size;
      image.type = img.type;
      image.image = await this.fileToBase64(img);
      this.state.imageUpload.push(image);
      console.log(this.state.imageUpload); */
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
   var uploadedimg = await listsService.fileupload(this.state.base64Image);
console.log(uploadedimg);
   /*  var data = {
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
    console.log(data)

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
    console.log(data); */
  }
  render() {
    const itemCategoryData = [{ id: 1, value: "Clothes" }, { id: 2, value: "Gadgets" }, { id: 3, value: "Food" }, { id: 4, value: "Appliances" }, { id: 5, value: "Others" }]; return (
      <Form onSubmit={this.saveItems} enctype="multipart/form-data">
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
          <Form.Control type="file" accept=".png, .jpg, .jpeg" name="image" onChange={this.handleFileUpload} />

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
            })
            //  &&    <Button variant="custom" >upload</Button>
          }
          {this.state.hasImage && <Button variant="custom" onClick={this.imageUpload}>upload</Button>}
          <Form.Label>Note (optional)</Form.Label>
          <Form.Control placeholder="explain what do you prefer for that item" name="note" value={this.state.note} onChange={this.onChangeNote} />
          <Form.Label>Max Pricing (optional)</Form.Label>
          <Form.Control type="number" name="price" value={this.state.price} onChange={this.onChangePrice} />
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="0" value={this.state.quantity} onChange={this.onChangeQuantity} />
          <Form.Check type='checkbox' label="Unlimited Item" name="unlimited" value={this.state.unlimited} onChange={this.onChangeUnlimited} />
        </Form.Group>
        <Button variant="custom" type="submit">
          Submit
        </Button>
      </Form>

    );
  }
}
