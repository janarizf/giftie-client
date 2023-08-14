import React, { useState } from "react";
import {
  StyledModal,
  MultiSelectDropdown
} from "../../../../../shared/elements";
import themesList from "../../../../../data/themesList.json";

const AddThemeModal = ({ open, onClose }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <StyledModal show={open} onHide={onClose}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>Add Customized Theme</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <MultiSelectDropdown
          options={themesList}
          toggle={toggleItem}
          selectedOptions={selectedItems}
          type={"checkbox"}
        />
      </StyledModal.Body>
    </StyledModal>
  );
};

export default AddThemeModal;
