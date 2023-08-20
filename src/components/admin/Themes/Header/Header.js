import React, { useState, useEffect, useMemo } from "react";
import { Container } from "./Header.styled";
import { Typography, Select } from "../../../../shared/elements";
import { Dropdown } from "react-bootstrap";
import adminService from "../../../../services/admin.service";
import { Spinner } from "react-bootstrap";

const Header = ({ categoryFilter, setCategoryFilter }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      adminService
        .getAllThemesCategories()
        .then((response) => {
          setResponse(response);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }

    fetchData();
    return;
  }, []);

  const themeCategories = useMemo(() => {
    return response ? response.data : [];
  }, [response]);

  return (
    <Container>
      <Typography fontSize={14} fontWeight='bold'>
        All Themes
      </Typography>
      {isLoading ? (
        <Spinner
          animation='border'
          style={{ margin: "10px 20px 0 auto" }}
          size='sm'
        />
      ) : (
        <Select>
          <Dropdown.Toggle id='dropdown-autoclose-true'>
            {categoryFilter ? categoryFilter : "Default"}
          </Dropdown.Toggle>
          <Dropdown.Menu className='w-100'>
            {themeCategories.map((item) => (
              <Dropdown.Item
                key={item._id}
                onClick={() => setCategoryFilter(item.category)}
              >
                {item.category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Select>
      )}
    </Container>
  );
};

export default Header;
