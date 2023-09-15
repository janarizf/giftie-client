import React, { useState, useEffect, useMemo } from "react";
import Filter from "../Filter/Filter";
import listsService from "../../../../../services/lists.service";
import EditItemModal from "./EditItemModal/EditItemModal";
import { CustomTableEditable } from "../../../../../shared";
import ItemTable from "./ItemTable";

const headers = ["Item", "Date Posted", "Item Link"];

const ItemLinkList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [itemFilter, setItemFilter] = useState("");
  const [itemDateFilter, setItemDateFilter] = useState("");
  const [itemData, setItemData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

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
          setItemData(allItems);
          setFilteredData(allItems);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchData() {
      var filteredData = itemData;
      if (itemFilter) {
        filteredData = filteredData.filter((item) =>
          item.name.toLowerCase().includes(itemFilter.toLowerCase()) ||
          item.website.toLowerCase().includes(itemFilter.toLowerCase())
        );
      }
      if (itemDateFilter) {
        filteredData = filteredData.filter((item) =>
        item.addedon.substring(0, 10) == itemDateFilter)
      }
      setFilteredData(filteredData);
    }
    fetchData();
  }, [itemFilter,itemDateFilter]);

  // useEffect(() => {
  //   async function fetchData() {
  //     var filteredData = filteredData;
  //     if (itemDateFilter) {
  //       filteredData = filteredData.filter((item) =>
  //       item.addedon.substring(0, 10) == itemDateFilter)
  //     }
  //     setFilteredData(filteredData);
  //   }
  //   fetchData();
  // }, [itemDateFilter]);

  const items = useMemo(() => {
    return itemData ? itemData : [];
  }, [itemData]);
  const filteredItems = useMemo(() => {
    return filteredData ? filteredData : [];
  }, [filteredData]);

  return (
    <div>
      <Filter
        itemFilter={itemFilter}
        setItemFilter={setItemFilter}
        itemDateFilter={itemDateFilter}
        setItemDateFilter={setItemDateFilter}
      />
      <ItemTable
        responsive='sm'
        hasActions
        headers={headers}
        data={filteredItems}
      />
    </div>
  );
};

export default ItemLinkList;
