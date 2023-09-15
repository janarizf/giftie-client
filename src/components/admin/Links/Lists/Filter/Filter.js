import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FilterDate } from "./Filter.styled";
import { Typography } from "../../../../../shared";
import { Calendar3 } from "react-bootstrap-icons";

const Filter = ({ itemFilter, setItemFilter, itemDateFilter, setItemDateFilter }) => {
  return (
    <div className='px-3 gap-2 mb-3'>
      <Row>
        <Col sm={1}>
          <Form.Label>Filter:</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Control type='date' onChange={(e) => setItemDateFilter(e.target.value)}></Form.Control>
        </Col>
        <Col sm={7}>
          <Form.Control type='text' placeholder='Search Item Name/Link' onChange={(e) => setItemFilter(e.target.value)} />
        </Col>
      </Row>

      {/* <FilterDate>
        <Typography customMargin={"2px 0 0"}>Filter Date</Typography>
        <Calendar3 size={"25px"} />
      </FilterDate> */}


    </div>
  );
};

export default Filter;
