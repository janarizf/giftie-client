import { styled } from "styled-components";
import { COLORS } from "../../../../constants/COLORS";
import placeholderImage from "../../../../img/giftie_logo.png";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  height: 92%;
  overflow-y: scroll;

  & > div {
    flex: 1;
    max-width: 280px;
    min-width: 280px;
  }
`;

export const AddNewTheme = styled.div`
  width: 100%;
  height: 315px;
  border: 2px dashed ${COLORS.SECONDARY};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  gap: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const ThemeItem = styled.div`
  width: 100%;
  height: 315px;
  border-radius: 5px;
  padding: 1em;
  gap: 5px;
  cursor: pointer;
  transition: 0.2s;
  background-image: url(${(props) => props.$image || placeholderImage});
  background-size: contain;
  border: 1px solid ${COLORS.MAIN_BACKGROUND};
  position: relative;

  &:after {
    content: "\";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 0.3s;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
  }

  &:hover:after {
    opacity: 1;
  }
`;
