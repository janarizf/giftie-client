import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Container, Col, Row, Form, Button, Modal, Tab, Tabs, Card, ListGroup } from 'react-bootstrap';
import groupsService from "../../services/groups.service";
import listsService from "../../services/lists.service";
import AddGroup from "./add-group.component";
import GroupList from "./lists/grouplists";
import GroupMembersView from "./members/group-members.component"
import Settings from "./settings/settings"
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


export default function GroupsEdit() {
  const [groupData, groupListData] = useState({
    groupData: []
  })
  const [listData, setListData] = useState({
    listId: "",
    listName: ""
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

      const response = await groupsService.get(params.id.toString())

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
      setUrl(window.location.href);
      console.log(record);
      groupListData(record);

      var listDT = [];
      record.lists.forEach(id => {
        listsService.get(id)
          .then(list => {
            if (list) {

              listDT.push({
                listId: list._id,
                listName: list.name
              });
              setListData({ listDT });
            }

          })

      });

    }
    async function getCategory(category) {
      const statusData = [{ id: 1, value: "New" }, { id: 2, value: "Closed" }, { id: 3, value: "Ongoing" }];
      const cat = statusData.filter(a => a.id == category);
      setCategory(cat[0].value);
    }
    fetchData();


    return;
  }, [params.id]);

  return (

    <Container>
      <Row className="jumbotron jumbotron-fluid">
        <Form className="p-3" >
          <Row>
            <Col sm={4} className="text-center">
              <Image fluid src={require('../../img/giftie_question.png')} alt="..." />
            </Col>
            <Col sm={8}>
              <div className="my-5" >
                <h3> Group: {groupData.groupname} </h3>

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
                    appId="1787998954935008"
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

      </Row>
      <Container>
        <Row >

          <Col>
            <Tabs
              defaultActiveKey="lists"
              id="uncontrolled-tab-example"
              className="mb-3 tab-list"
            >
              <Tab eventKey="lists" title="Lists">
                {<GroupList />}
              </Tab>
              <Tab eventKey="members" title="Members">
                {<GroupMembersView groupid={params.id} />}
              </Tab>
              <Tab eventKey="settings" title="Settings">
                {<Settings groupData={groupData} />}
              </Tab>

            </Tabs>
          </Col>
        </Row>
      </Container>
      <Container>

      </Container>
      <Modal show={modal.modalShow} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Group</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddGroup groupData={groupData} /></Modal.Body>
      </Modal>
    </Container>
  );

}