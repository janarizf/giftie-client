import { Modal } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

export const StyledModal = styled(Modal)`
  height: 100%;

  .modal-content {
    padding: 20px 30px;
  }

  & .modal-header,
  .modal-body,
  .modal-footer {
    padding: 0;
  }

  & .modal-header {
    border-bottom: 0;
    margin-bottom: 25px;
  }

  & .modal-title {
    font-size: 16px;
    font-weight: bold;
  }

  & .btn-close {
    background: ${COLORS.BLACK};
    opacity: 1;
    color: ${COLORS.WHITE};
    font-size: 0;
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 25px;
    margin: 0;

    &::before {
      content: "×";
      font-size: 24px;
      color: ${COLORS.WHITE};
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }

  & .form-label {
    font-size: 14px;
    color: ${COLORS.BLACK};
    margin-bottom: 0.35rem;
  }
`;

export default StyledModal;
