import React, { useState, useRef, useEffect, useMemo } from "react";
import { StyledModal } from "../../../../../../shared/elements";
import { Form, Dropdown, Spinner, Button, Row, Col } from "react-bootstrap";
import listsService from "../../../../../../services/lists.service";

const EditItemModal = ({ open, onClose, item }) => {
    const [newWebsite, SetNewWebsite] = useState("");
    const handleChangeLink = (link) => {
        SetNewWebsite(link.target.value);
    };

    const handleSubmit = () => {
        async function EditItem() {
            const data = {
                listId: item.list_id,
                itemId: item._id,
                website: newWebsite
            }
            await listsService
                .updateItemLink(data)
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        EditItem();
    };
    return (
        <StyledModal
            show={open}
            onHide={() => {
                onClose();
            }}
            size='md'
        >
            <StyledModal.Header closeButton>
                <StyledModal.Title>Edit Item Link</StyledModal.Title>
            </StyledModal.Header>
            <StyledModal.Body>
                <Form>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Old Link: </Form.Label>
                        </Col>
                        <Col sm={10}>
                            <Form.Control
                                disabled
                                value={item.website}
                                name='oldwebsite' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Affiliate Link: </Form.Label>
                        </Col>
                        <Col sm={10}> <Button >Shopee</Button></Col>

                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>New Link: </Form.Label>
                        </Col>
                        <Col sm={10}>
                            <Form.Control
                                placeholder={"New Website Link"}
                                onChange={handleChangeLink}
                                name='newwebsite' />
                        </Col>
                    </Row>

                    <Button onClick={handleSubmit}>Save</Button>
                </Form>
            </StyledModal.Body>

        </StyledModal>)
}
export default EditItemModal;