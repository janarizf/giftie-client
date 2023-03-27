import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import listsService from "../../services/lists.service";
import ItemListView from "../lists/view-item-list.component";
import ProfileView from "./view-profile.component"
import { Container } from 'react-bootstrap';
export default function ProfileMainView() {

  return (
    <Container>
      <ProfileView/>
    </Container>
  );

}