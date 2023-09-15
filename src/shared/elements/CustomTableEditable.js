import React from "react";
import { Table } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import { Typography } from ".";

export const StyledTable = styled(Table)`
  border-top: 1px solid;
  border-color: ${COLORS.BORDER_GRAY};

  & th,
  td {
    padding: 7px 25px;
  
  }

  & > tbody > tr {
    border-color: ${COLORS.MAIN_BACKGROUND};
  }
`;

const CustomTableEditable = ({
  headers = [],
  data = [],
  hasActions = false,
  ...props
}) => {
  return (
    <StyledTable {...props}>
      {headers.length ? (
        <thead>
          <tr>
            {hasActions ? (
              <th>
                <Typography color={COLORS.DARK_GRAY}>Action</Typography>
              </th>
            ) : (
              <React.Fragment />
            )}
            {headers.map((i) => (
              <th>
                <Typography color={COLORS.DARK_GRAY} children={undefined} customMargin={undefined}>{i}</Typography>
              </th>
            ))}

          </tr>
        </thead>
      ) : (
        <React.Fragment />
      )}
      {data.length ? (
        <tbody>

          {data.map((item, _) => (
            <tr key={`item-${item._id}`}>
              {hasActions ? (
                <th>
                  <PencilSquare />
                  <TrashFill />
                </th>
              ) : (
                <React.Fragment />
              )}
              <td >{item.name}</td>
              <td >{item.addedon}</td>
              <td >{"Basic Link"}</td>
              <td >{item.website}</td>
             

            </tr>
          ))}
        </tbody>
      ) : (
        <div>No data available</div>
      )}
    </StyledTable>
  );
};

export default CustomTableEditable;
