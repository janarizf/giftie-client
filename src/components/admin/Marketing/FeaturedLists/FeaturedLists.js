import React from "react";
import Head from "./Head/Head";
import List from "./List/List";

const FeaturedLists = () => {
  return (
    <div className='d-flex flex-column gap-3 h-100'>
      <Head />
      <List />
    </div>
  );
};

export default FeaturedLists;
