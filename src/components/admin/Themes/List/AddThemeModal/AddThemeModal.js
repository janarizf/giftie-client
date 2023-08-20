import React, { useState, useRef } from "react";
import {
  StyledModal,
  MultiSelectDropdown
} from "../../../../../shared/elements";
import themesList from "../../../../../data/themesList.json";
import { Form } from "react-bootstrap";
import {
  AddColor,
  SketchPickerButtonsContainer,
  SketchPickerContainer,
  StyledButton
} from "./AddThemeModal.styled";
import { BrushFill } from "react-bootstrap-icons";
import { COLORS } from "../../../../../constants/colors";
import { SketchPicker } from "react-color";
import useOutsideContainerClick from "./../../../../../shared/utils/useOutsideContainerClick";

const AddThemeModal = ({ open, onClose }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [color, setColor] = useState("#FF5733");
  const wrapperRef = useRef(null);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };

  const handleColorPickerClose = () => {
    setIsColorPickerOpen(false);
  };
  useOutsideContainerClick(wrapperRef, handleColorPickerClose);

  return (
    <StyledModal
      show={open}
      onHide={() => {
        onClose();
        setIsColorPickerOpen(false);
      }}
      size='md'
    >
      <StyledModal.Header closeButton>
        <StyledModal.Title>Add Customized Theme</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='addThemeForm.category'>
            <Form.Label>List Category</Form.Label>
            <MultiSelectDropdown
              options={themesList}
              toggle={toggleItem}
              selectedOptions={selectedItems}
              type={"checkbox"}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='addThemeForm.textColor'>
            <Form.Label>Text Color</Form.Label>
            <AddColor onClick={() => setIsColorPickerOpen(true)}>
              <BrushFill style={{ fontSize: "13px" }} color={COLORS.DANGER} />
            </AddColor>
          </Form.Group>
          <Form.Group className='mb-3' controlId='addThemeForm.backgroundColor'>
            <Form.Label>Background Color</Form.Label>
            <AddColor onClick={() => setIsColorPickerOpen(true)}>
              <BrushFill style={{ fontSize: "13px" }} color={COLORS.DANGER} />
            </AddColor>
          </Form.Group>
          <Form.Group className='mb-3' controlId='addThemeForm.headerColor'>
            <Form.Label>Header Color</Form.Label>
            <AddColor onClick={() => setIsColorPickerOpen(true)}>
              <BrushFill style={{ fontSize: "13px" }} color={COLORS.DANGER} />
            </AddColor>
          </Form.Group>
        </Form>
      </StyledModal.Body>
      {isColorPickerOpen ? (
        <SketchPickerContainer ref={wrapperRef}>
          <SketchPicker color={color} onChange={handleChange} />
          <SketchPickerButtonsContainer>
            <StyledButton>Select</StyledButton>
            <StyledButton
              className='secondary'
              onClick={() => setIsColorPickerOpen(false)}
            >
              Close
            </StyledButton>
          </SketchPickerButtonsContainer>
        </SketchPickerContainer>
      ) : (
        <React.Fragment />
      )}
    </StyledModal>
  );
};

export default AddThemeModal;
