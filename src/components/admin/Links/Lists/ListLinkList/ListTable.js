import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../../../../constants/colors";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import { Typography } from "../../../../../shared/elements";

export const StyledTable = styled(Table)`
  background: ${COLORS.WHITE};
  border-top: 1px solid;
  border-color: ${COLORS.BORDER_GRAY};
  & th,
  td {
    padding: 5px 15px;
    max-width: 500px;
    overflow: hidden;
  }


  & > tbody > tr {
    border-color: ${COLORS.MAIN_BACKGROUND};
  }
`;

const ListTable = ({
    headers = [],
    data = [],
    hasActions = false,
    ...props
}) => {
    const [selectedItem, setselectedItem] = useState({});

    const editItem = (item) => {
        setselectedItem(item);

    };

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
                <tbody >

                    {data.map((item, _) => (
                        <tr key={`item-${item._id}`}>
                            {hasActions ? (
                                <th>
                                    <Button variant="link" onClick={() => editItem(item)}><PencilSquare /></Button>
                                </th>
                            ) : (
                                <React.Fragment />
                            )}
                            <td>{item.originallink}</td>
                            <td>{item.requestedlink}</td>
                            <td>{item.linkstatus}</td>
                            <td>{item.requestedby}</td>
                            <td>{item.requesteddate.substring(0, 10)}</td>
                            <td>{item.approvedby}</td>
                            <td>{item.approveddate.substring(0, 10)}</td>
                         </tr>
                    ))}
                </tbody>
            ) : (
                <div>No data available</div>
            )}

        </StyledTable>
    );
};

export default ListTable;
