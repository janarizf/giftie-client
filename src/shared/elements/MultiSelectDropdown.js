import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors.js";
import { ChevronDown } from "react-bootstrap-icons";

export const StyledDropdown = styled(Dropdown)`
  width: 100%;
  cursor: pointer;

  & .custom-toggle-wrap {
    all: unset;
    height: 50px;
  }

  & .custom-toggle {
    width: 100%;
    border: 1px solid ${COLORS.DARK_GRAY};
    border-radius: 5px;
    padding: 7px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }

  & .custom-toggle-selected-text {
    font-size: 14px;
    color: ${COLORS.GRAY}
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  & .custom-styled-list {
    padding: 0;
    margin: 0;

    & .form-check-inline {
      margin-right: 0.75rem;
  
      & input:checked {
        background-color: ${COLORS.PRIMARY};
        border-color: ${COLORS.PRIMARY};
      }
    }

    & a:active {
      background-color: ${COLORS.PRIMARY};
    }
  }
`;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className='custom-toggle-wrap'
    href=''
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <div className='custom-toggle'>
      <div className='custom-toggle-selected-text'>{children}</div>
      <ChevronDown />
    </div>
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className='custom-styled-list'>
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const MultiSelectDropdown = ({
  selectedOptions = [], // must be in { key: sample, value: sample } format
  options = [], // must be in { key: sample, value: sample } format
  toggle, // toggle function for selecting/deselecting items
  type, // checkbox or radio
  ...props
}) => {
  return (
    <StyledDropdown>
      <StyledDropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {selectedOptions.length
          ? selectedOptions.map((item) => item.value).join(", ")
          : "Select"}
      </StyledDropdown.Toggle>
      <StyledDropdown.Menu as={CustomMenu} style={{ width: "100%" }}>
        {options.length &&
          options.map((i, _) => (
            <StyledDropdown.Item
              value={i.value}
              key={i.key}
              eventKey={_}
              onClick={() => toggle(i)}
            >
              <Form.Check
                inline
                type={type}
                id={`inline-${type}-1`}
                checked={selectedOptions.includes(i)}
              />
              {i.value}
            </StyledDropdown.Item>
          ))}
      </StyledDropdown.Menu>
    </StyledDropdown>
  );
};

export default MultiSelectDropdown;
