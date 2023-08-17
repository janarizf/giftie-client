import React from "react";
import { Table } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";
import { TrashFill } from "react-bootstrap-icons";
import { Typography } from "../elements";

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

const CustomTable = ({
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
            {headers.map((i) => (
              <th>
                <Typography color={COLORS.DARK_GRAY} children={undefined} customMargin={undefined}>{i}</Typography>
              </th>
            ))}
            {hasActions ? (
              <th>
                <Typography color={COLORS.DARK_GRAY}>Action</Typography>
              </th>
            ) : (
              <React.Fragment />
            )}
          </tr>
        </thead>
      ) : (
        <React.Fragment />
      )}
      {data.length ? (
        <tbody>
          {data.map((item, _) => (
            <tr>
              {Object.keys(item).map((key) => (
                <td>{item[key]}</td>
              ))}
              {hasActions ? (
                <th>
                  <TrashFill />
                </th>
              ) : (
                <React.Fragment />
              )}
            </tr>
          ))}
        </tbody>
      ) : (
        <div>No data available</div>
      )}
    </StyledTable>
  );
};

export default CustomTable;
