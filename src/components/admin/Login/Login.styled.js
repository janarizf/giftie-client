import { styled } from "styled-components";
import backgroundImage from "../../../img/giftie_green.jpg";
import { COLORS } from "../../../constants/colors";
import { Form } from "react-bootstrap";

export const Container = styled.div`
  gap: 20px;
  height: 100%;
  min-height: 100vh;
  padding: 40px 60px;
  background-image: url(${backgroundImage});
  background-size: contain;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  position: absolute;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
`;
export const LeftContainer = styled.div`
  width: 70%;
  margin-bottom: 40px;
`;

export const RightContainer = styled.div`
  width: 30%;
  height: 100%;
  padding-bottom: 20px;
`;

export const FormContainer = styled.div`
  background: ${COLORS.WHITE};
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 70px;
  position: relative;
`;

export const Heading = styled.div`
  margin-bottom: 20px;
`;

export const GoogleSignInButton = styled.button`
  width: 100%;
  background: ${COLORS.GOOGLE_RED};
  border: none;
  height: 46px;
  border-radius: 5px;
  color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const TextWithLines = styled.p`
  position: relative;
  font-size: 15px;
  z-index: 1;
  overflow: hidden;
  text-align: center;
  width: 100%;
  margin: 10px 0;
  color: ${COLORS.BLACK};

  &:before {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 48%;
    height: 1px;
    content: "\a0";
    background-color: ${COLORS.BLACK};
    margin-left: -50%;
    text-align: right;
  }

  &:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 46%;
    height: 1px;
    right: 0;
    content: "\a0";
    background-color: ${COLORS.BLACK};
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormFooter = styled.div`
  position: absolute;
  bottom: 20px;
`;
