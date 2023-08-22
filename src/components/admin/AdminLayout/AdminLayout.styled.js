import { styled } from "styled-components";
import { Container } from "react-bootstrap";
import { COLORS } from "../../../constants/colors";

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

export const ContentWrapper = styled.div`
  padding: 30px 30px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 991px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;
