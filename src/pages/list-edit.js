import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import listsService from "../services/lists.service";
import ItemListView from "../components/lists/view-item-list.component";
import { Container, Col, Row, Form,Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
export default function ListEdit() {
  const [listData, setListData] = useState({
    listData: []
  })
  const [category, setCategory] = useState(true)


  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {

    async function fetchData() {

      const id = params.id.toString();

      const response = await listsService.get(params.id.toString())

      if (!response) {
        const message = `An error has occured: ${response.statusText}`;
        alert(message);
        return;
      }

      const record = response.data;
      if (!record) {
        alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setListData(record)
      getCategory(response.data.category_id)
    }
    async function getCategory(category) {
      const categoryData = [{ id: 1, value: "Birthday" }, { id: 2, value: "Wedding" }, { id: 3, value: "Christmas" }, { id: 4, value: "Baby Shower" }, { id: 5, value: "Housewarming" }, { id: 6, value: "Others" }];
      const cat = categoryData.filter(a => a.id == category);
      setCategory(cat[0].value);
    }
    fetchData();


    return;
  }, [params.id, navigate]);
  return (

    <Container>
      <div className="jumbotron jumbotron-fluid">
        <Form className="p-3" >
          <Row>
            <Col sm={4} className="text-center">
              <Image fluid src={require('../img/giftie_question.png')} alt="..."/>
            </Col>
            <Col sm={8}>
              <div className="my-5" >
               <h3> List: {listData.name} </h3>
               <h5>Set Date: {listData.set_date && listData.set_date.substring(0, 10)}</h5> 
               <h5> Location: {listData.location}</h5> 
               <h5>Introduction: {listData.introduction}</h5> 
               <h5> Category: {category}</h5> 
               <Button size="md" variant="custom">Edit</Button> 
              </div>
            </Col>
          </Row>
        </Form>

      </div>
      <ItemListView listId={params.id} listData={listData} />
    </Container>
  );

}