import React, { useState, useEffect, useMemo } from "react";
import Filter from "../Filter/Filter";
import listUrlService from "../../../../../services/admin/listurlrequest.service";
import ListTable from "./ListTable";

import { CustomTable } from "../../../../../shared";

const headers = ["Basic Link", "List Link Request to", "Link Status", "Requested By", "Requested Date", "Approved By", "Approved Date"];
const status = ["Waiting", "Rejected", "Approved"]
const mockData = [
  {
    id: "user1",
    basic_link: "https://giftie/lorem-ipsum/dolor-sit-amet",
    list_link_request_to: "https://bit.lyh/lorem-ipsum/dolor-sit-amet",
    link_status: "Waiting"
  },
  {
    id: "user2",
    basic_link: "https://giftie/lorem-ipsum/dolor-sit-amet",
    list_link_request_to: "https://bit.lyh/lorem-ipsum/dolor-sit-amet",
    link_status: "Rejected"
  },
  {
    id: "user3",
    basic_link: "https://giftie/lorem-ipsum/dolor-sit-amet",
    list_link_request_to: "https://bit.lyh/lorem-ipsum/dolor-sit-amet",
    link_status: "Approved"
  }
];

const ListLinkList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [itemFilter, setItemFilter] = useState("");
  const [itemDateFilter, setItemDateFilter] = useState("");
  const [itemData, setItemData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      await listUrlService
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

  const items = useMemo(() => {
    return itemData ? itemData : [];
  }, [itemData]);
  const filteredItems = useMemo(() => {
    return filteredData ? filteredData : [];
  }, [filteredData]);


  return (
    <div>
      <Filter />
      <CustomTable
        responsive='md'
        hasActions
        headers={headers}
        data={mockData}
      />
      <ListTable
        responsive='md'
        hasActions
        headers={headers}
        data={filteredItems}
      />
    </div>
  );
};

export default ListLinkList;
