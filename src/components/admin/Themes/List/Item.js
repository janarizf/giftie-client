import React, { useEffect, useState } from "react";

import { ThemeItem, ThemeItemInfoContainer } from "./List.styled";
import adminService from "../../../../services/admin.service";

const Item = ({ data }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      adminService
        .getThemesById(data.category_id)
        .then((response) => {
          setResponse(response);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }

    fetchData();
    return;
  }, []);

  console.log("====================================");
  console.log(response);
  console.log("====================================");

  return (
    <ThemeItem
      $image={data && data.backgroundimage ? data.backgroundimage : ""}
    >
      <ThemeItemInfoContainer
        $backgroundColor={data.bodycolor || ""}
        $color={data.textcolor || ""}
      >
        {data.name}
      </ThemeItemInfoContainer>
    </ThemeItem>
  );
};

export default React.memo(Item);
