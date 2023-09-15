import React, { useState, useEffect, useMemo } from "react";
import Filter from "../Filter/Filter";
import listsService from "../../../../../services/lists.service";
import EditItemModal from "./EditItemModal/EditItemModal";
import { CustomTableEditable } from "../../../../../shared";
import ItemTable from "./ItemTable";

const headers = ["Item", "Date Posted", "Item Link"];

const ItemLinkList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      await listsService
        .getAll()
        .then((response) => {
          const allItems = [];
          for (const list of response.data) {
              allItems.push(...list.items);
          }
          setResponse(allItems);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }
    fetchData();
  },[])

  const items = useMemo(() => {
    return response ? response : [];
  }, [response]);

  return (
    <div>
      <Filter />
      <ItemTable
        responsive='sm'
        hasActions
        headers={headers}
        data={items}
      />
    </div>
  );
};

export default ItemLinkList;
