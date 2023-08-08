import { styled } from "styled-components";
import { Container } from "react-bootstrap";
import { COLORS } from "../../../constants/COLORS";

export const Content = styled.div`
  padding: 30px;
`;

export const MainContainer = styled(Container)`
  min-height: 100vh;
  padding: 15px;
  background: ${COLORS.MAIN_BACKGROUND};
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
