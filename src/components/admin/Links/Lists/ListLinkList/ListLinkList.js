import React from "react";
import Filter from "../Filter/Filter";
import { CustomTable } from "../../../../../shared";

const headers = ["User", "Basic Link", "List Link Request to", "Link Status"];
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
  return (
    <div>
      <Filter />
      <CustomTable
        responsive='md'
        hasActions
        headers={headers}
        data={mockData}
      />
    </div>
  );
};

export default ListLinkList;
