import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  border-radius: 5px;
  border: 1px dashed ${COLORS.DARK_GRAY};
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
  background: ${(props) => props.$background || "transparent"};
  width: 100%;

  & svg path {
    fill: ${COLORS.DARK_GRAY};
  }

  & p {
    color: ${COLORS.DARK_GRAY};
  }
`;

export const Preview = styled.img`
  width: calc(100% + 20px);
  height: 98px;
  object-fit: cover;
  border-radius: 5px;
`;
