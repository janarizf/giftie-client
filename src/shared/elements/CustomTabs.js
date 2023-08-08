import { Tabs as ReactTabs } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../constants/COLORS";

export const StyledTabs = styled(ReactTabs)`
  gap: 10px;

  & .nav-tabs > li.active > a,
  & .nav-tabs > li.active > a:focus,
  & .nav-tabs > li.active > a:hover,
  & .nav-link,
  & .nav-link:hover {
    border: 0;
  }

  & .nav-link {
    padding: 1em 2em;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    &:not(.active) {
      background: ${COLORS.WHITE};
      opacity: 0.5;
      color: ${COLORS.BLACK};
    }
  }
`;

const CustomTabs = ({ children, ...props }) => {
  return <StyledTabs {...props}>{children}</StyledTabs>;
};

export default CustomTabs;
