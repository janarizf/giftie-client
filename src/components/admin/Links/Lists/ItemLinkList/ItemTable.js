import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../../../../constants/colors";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import { Typography } from "../../../../../shared/elements";
import EditItemModal from "./EditItemModal/EditItemModal";

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

const ItemTable = ({
    headers = [],
    data = [],
    hasActions = false,
    ...props
}) => {
    const [isEditItemModalOpen, setisEditItemModalOpen] = useState(false);
    const [selectedItem, setselectedItem] = useState({});

    const editItem = (item) => {
        setselectedItem(item);
        setisEditItemModalOpen(true);

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
                            <td width={"250px"}>{item.name}</td>
                            <td width={"250px"}>{item.addedon.substring(0, 10)}</td>
                            <td width={"250px"}>{item.website}</td>
                        </tr>
                    ))}
                </tbody>
            ) : (
                <div>No data available</div>
            )}
            <EditItemModal
                open={isEditItemModalOpen}
                onClose={() => setisEditItemModalOpen(false)}
                item={selectedItem}
            />
        </StyledTable>
    );
};

export default ItemTable;
