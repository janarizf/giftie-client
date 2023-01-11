import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import listsService from "../services/lists.service";
import ItemListView from "../components/lists/view-item-list.component";
import CreateList from "../components/lists/create-list.component"
import { Container, Col, Row, Form, Button, Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
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

export default function ListEdit() {
  const [listData, setListData] = useState({
    listData: []
  })
  const [modal, setModal] = useState({
    modalShow: false
  })
  const [shareUrl, setUrl] = useState({
    shareUrl: 'www.google.com'
  })
  const [category, setCategory] = useState(true)


  const params = useParams();
  const navigate = useNavigate();

  function openModal() {
    setModal({
      modalShow: true

    });
  };
  function closeModal() {
    setModal({
      modalShow: false
    });
  };

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
      setUrl(window.location.href)
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
              <Image fluid src={require('../img/giftie_question.png')} alt="..." />
            </Col>
            <Col sm={8}>
              <div className="my-5" >
                <h3> List: {listData.name} </h3>
                <h5>Set Date: {listData.set_date && listData.set_date.substring(0, 10)}</h5>
                <h5> Location: {listData.location}</h5>
                <h5>Introduction: {listData.introduction}</h5>
                <h5> Category: {category}</h5>
                <Button size="md" variant="custom" onClick={openModal}>Edit</Button>
                <div>
                  <EmailShareButton
                    url={shareUrl}
                    quote={'Link Share'}
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={'FB Share'}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="1991129724610007"
                  >
                    <FacebookMessengerIcon size={32} round />
                  </FacebookMessengerShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    quote={'Twitter Share'}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
              </div>
            </Col>
          </Row>
        </Form>

      </div>
      <ItemListView listId={params.id} listData={listData} />
      <Modal show={modal.modalShow} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit list</Modal.Title>
        </Modal.Header>
        <Modal.Body><CreateList listData={listData} /></Modal.Body>
      </Modal>
    </Container>
  );

}