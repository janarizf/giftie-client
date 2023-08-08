import React from "react";
import Filter from "../Filter/Filter";
import { CustomTable } from "../../../../../shared";

const headers = ["User", "Item", "Date Posted", "Item Link", "Link Status"];
const mockData = [
  {
    id: "user1",
    item: "Lorem Ipsum",
    date_posted: "11 Jul 2023",
    item_link: "https://bit.lyh/lorem-ipsum/dolor-sit-amet",
    link_status: "User Affiliate"
  },
  {
    id: "user2",
    item: "Lorem Ipsum",
    date_posted: "11 Jul 2023",
    item_link: "https://bit.lyh/lorem-ipsum/dolor-sit-amet",
    link_status: "User Affiliate"
  },
  {
    id: "user3",
    item: "Lorem Ipsum",
    date_posted: "11 Jul 2023",
    item_link: "https://bit.lyh/lorem-ipsum/dolor-sit-amet",
    link_status: "User Affiliate"
  }
];

const ItemLinkList = () => {
  return (
    <div>
      <Filter />
      <CustomTable
        responsive='sm'
        hasActions
        headers={headers}
        data={mockData}
      />
    </div>
  );
};

export default ItemLinkList;
