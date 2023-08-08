import React from "react";
import { useParams } from "react-router";
import FeaturedLists from "./FeaturedLists/FeaturedLists";

const Marketing = () => {
  const { tab } = useParams();

  return (
    <div>
      {tab === "featured-lists" ? <FeaturedLists /> : <React.Fragment />}
    </div>
  );
};

export default Marketing;
