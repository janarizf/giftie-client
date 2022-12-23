import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import listsService from "../services/lists.service";
import ItemListView from "../components/lists/view-item-list.component";
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
export default function ListCreate() {
    const [listData, setListData] = useState({
        listData: []
    })
    const params = useParams();
    const navigate = useNavigate();

    const categoryData = [{ id: 1, value: "Birthday" }, { id: 2, value: "Wedding" }, { id: 3, value: "Christmas" }, { id: 4, value: "Baby Shower" }, { id: 5, value: "Housewarming" }, { id: 6, value: "Others" }];
  
    return (
        
        <Container>
            <Form className="formItem">
                <Row>
                    {/* <Col sm>
            <Button>
              <Image src={btnImg} rounded width='200px' />
            </Button>
          </Col> */}
                    <Col sm>
                        {/* <Form.Control placeholder="Wishlist" name="name" required value={this.state.name} onChange={this.onChangeName} />
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
                        </Form.Select> */}
                    </Col>
                    <Col sm></Col>
                    <Col sm>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
            {/* <ItemListView listId={params.id} listData={listData}/>  */}
        </Container>
    );

}