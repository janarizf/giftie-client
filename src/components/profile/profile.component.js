import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import ProfileView from "./view-profile.component"
import { Container } from 'react-bootstrap';
export default function ProfileMainView() {

  return (
    <Container>
      <ProfileView/>
    </Container>
  );

}