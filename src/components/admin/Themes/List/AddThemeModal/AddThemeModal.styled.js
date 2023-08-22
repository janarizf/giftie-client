import { Button } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../../../../constants/colors";

export const AddColor = styled("div")`
  background: none;
  border: 1px solid ${COLORS.DANGER};
  border-radius: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 2px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ColorItem = styled("div")`
  background: ${(props) => props.$backgroundColor || COLORS.PRIMARY};
  border-radius: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const ShadowActiveBorder = styled("div")`
  display: absolute;
  padding: 2px;
  background-color: transparent;
  border-radius: 25px;
  transition: 0.2s;
`;

export const SketchPickerContainer = styled("div")`
  background: ${COLORS.WHITE};
  padding: 12px 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.15) 0px 8px 16px;
  position: absolute;
  border-radius: 5px;

  & .sketch-picker {
    box-shadow: none !important;
  }
`;

export const SketchPickerButtonsContainer = styled("div")`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background: ${COLORS.PRIMARY};
  border: none;
  height: 30px;
  border-radius: 5px;
  color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  transition: 0.2s ease-in-out;

  &.secondary {
    background: ${COLORS.GRAY};

    &:hover {
      background: ${COLORS.GRAY}!important;
    }
  }

  &:hover,
  &:active {
    background-color: ${COLORS.PRIMARY}!important;
    opacity: 0.8;
  }
`;
