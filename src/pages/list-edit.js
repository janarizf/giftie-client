import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import listsService from "../services/lists.service";
import ItemListView from "../components/lists/view-item-list.component";
import { Container } from 'react-bootstrap';
export default function ListEdit() {
  const [listData, setListData] = useState({
    listData: []
  })
  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();

      const response = await listsService.get(params.id.toString())

      if (!response) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = response.data;
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setListData(record)
    }

    fetchData();

    return;
  }, [params.id, navigate]);
  return (
    <Container>
      <ItemListView listId={params.id}/>
    </Container>
  );

}