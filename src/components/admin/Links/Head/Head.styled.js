import { styled } from "styled-components";
import { COLORS } from "../../../../constants/colors";

export const Container = styled.div`
  background: ${COLORS.WHITE};
  padding: 15px 20px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  & > & {
    flex: 1;
  }
`;

export const ContainerItemWrapper = styled.div`
  display: flex;
  width: 49.5%;
  gap: 20px;
  align-items: center;
  flex-wrap: nowrap;

  & > :last-child {
    flex: 1;
  }
`;
