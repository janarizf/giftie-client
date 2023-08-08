import { styled } from "styled-components";
import { COLORS } from "../../../../constants/COLORS";

export const FullHeightWrap = styled.div`
  height: 100%;
  & > .tab-content,
  & > .tab-content > div,
  & > div {
    height: 100%;
  }
`;

export const TabContainer = styled.div`
  background: ${COLORS.WHITE};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px 0;
  height: 96%;
`;
