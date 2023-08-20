import React, { useEffect, useState } from "react";
import { CustomTable } from "../../../../../shared";
import logo from "../../../../../img/giftie_logo.png";
import featureListService from "../../../../../services/admin/featuredlist.service";

const headers = [
  "List Name",
  "Items",
  "Used by users",
  "Clicks",
  "Image",
  "Page Link",
  "Feature to",
  "Post"
];

const mockData = [
  {
    id: "Baby Shower List",
    items: 20,
    used_by_users: 123,
    clicks: 254,
    image: <img src={logo} height='20px' width='30px' />,
    page_link: "https://giftie/lorem-ipsum/dolor-sit-amet",
    feature_to: "Choose",
    post: false
  },
  {
    id: "Baby Shower List",
    items: 20,
    used_by_users: 123,
    clicks: 254,
    image: <img src={logo} height='20px' width='30px' />,
    page_link: "https://giftie/lorem-ipsum/dolor-sit-amet",
    feature_to: "Choose",
    post: false
  },
  {
    id: "Baby Shower List",
    items: 20,
    used_by_users: 123,
    clicks: 254,
    image: <img src={logo} height='20px' width='30px' />,
    page_link: "https://giftie/lorem-ipsum/dolor-sit-amet",
    feature_to: "Choose",
    post: false
  }
];
const List = () => {
  // const [response, setResponse] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   async function fetchData() {
  //     await featureListService
  //       .getAllThemesCategories()
  //       .then((response) => {
  //         setResponse(response);
  //         setIsLoading(false);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         setIsLoading(false);
  //       });
  //   }

  //   fetchData();

  //   return;
  // }, []);

  return (
    <div className='h-100'>
      <CustomTable
        responsive='sm'
        hasActions
        headers={headers}
        data={mockData}
        style={{ borderTop: "none" }}
      />
    </div>
  );
};

export default List;
