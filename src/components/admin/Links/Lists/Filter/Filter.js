import React from "react";
import { Form } from "react-bootstrap";
import { FilterDate } from "./Filter.styled";
import { Typography } from "../../../../../shared";
import { Calendar3 } from "react-bootstrap-icons";

const Filter = () => {
  return (
    <div className='px-3 d-flex gap-2 mb-3'>
      <Form.Control type='text' placeholder='Search by user' />
      <FilterDate>
        <Typography customMargin={"2px 0 0"}>Filter Date</Typography>
        <Calendar3 size={"25px"} />
      </FilterDate>
    </div>
  );
};

export default Filter;
