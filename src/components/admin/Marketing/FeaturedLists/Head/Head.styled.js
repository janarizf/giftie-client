import { styled } from "styled-components";
import { COLORS } from "../../../../../constants/colors";

export const Container = styled.div`
  background: ${COLORS.WHITE};
  padding: 15px 20px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const StyledButton = styled.button`
  width: auto;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: ${COLORS.PRIMARY};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.6;
    transition: all 0.2s;
  }
`;
