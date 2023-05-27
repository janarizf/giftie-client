import React, { Component } from "react";
import { Button, Form, Card, Container, Modal } from 'react-bootstrap';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from "react-share";

import AddItem from "./add-item.component";
export default class ViewItem extends Component {
  constructor(props) {
    super(props);
    console.log(props.itemData[0])
    this.state = {
      list_id: props.itemData[0]._id,
      list_data: props.itemData[0],
      viewItem: true,
      editItem: false,
      shareUrl: window.location.href
    }
  }
  editItem = () => this.setState({ editItem: true, viewItem: false });
  viewItem = () => this.setState({ editItem: false, viewItem: true, });
  imgSrc() {
    console.log(this.state.list_data.image);
    if (this.state.list_data.image.length > 0) {
      const apiurl = process.env.REACT_APP_APIURL;
      return apiurl + "lists/getImage/" + this.state.list_data.image[0].filename;
    } else {
      return require('../../img/giftie_question.png')
    }
  }
  render() {
    const itemCategoryData = [{ id: 1, value: "Clothes" }, { id: 2, value: "Gadgets" }, { id: 3, value: "Food" }, { id: 4, value: "Appliances" }, { id: 5, value: "Others" }];

    return (
      <Container >

        <Card className="m-3">
          <Card.Img src={this.imgSrc()} />
          <Card.Body>
            {this.state.viewItem &&
              <Form>
                <Form.Label> Item: </Form.Label> {this.state.list_data.name}<br />
                <Form.Label> Website: </Form.Label>{this.state.list_data.website} <br />
                <Form.Label> Category: </Form.Label>{this.state.list_data.category_id}<br />
                <Form.Label> Note: </Form.Label>{this.state.list_data.note}<br />
                <Form.Label> Price: </Form.Label>{this.state.list_data.price}<br />
                <Form.Label> Quantity:</Form.Label> {this.state.list_data.quantity}<br />
                <Form.Label> Unlimited:</Form.Label> {this.state.list_data.unlimited}<br />
                <Form.Label> Added on: </Form.Label>{this.state.list_data.addedon}<br />



                <Button variant="custom" onClick={this.viewItem}>Save</Button>
                <Button variant="custom" onClick={this.editItem}>Edit</Button>
              </Form>
            }

            {this.state.editItem && <Form onSubmit={this.saveItems} encType="multipart/form-data">
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
            </Form>}
            <div>
              <EmailShareButton
                url={this.state.shareUrl}
                quote={'Link Share'}
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
              <FacebookShareButton
                url={this.state.shareUrl}
                quote={'FB Share'}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <FacebookMessengerShareButton
                url={this.state.shareUrl}
                appId="1787998954935008"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
              <TwitterShareButton
                url={this.state.shareUrl}
                quote={'Twitter Share'}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </Card.Body>

        </Card>

      </Container>

    );
  }
}
