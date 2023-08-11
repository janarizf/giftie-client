import { Tab as ReactTab } from "react-bootstrap";
import { styled } from "styled-components";

export const StyledTab = styled(ReactTab)`
  height: 100%;
`;

const CustomTab = ({ children, ...props }) => {
  return <StyledTab {...props}>{children}</StyledTab>;
};

export default CustomTab;
