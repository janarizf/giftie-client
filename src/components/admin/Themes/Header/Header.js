import React, { useState, useEffect, useMemo } from "react";
import { Container } from "./Header.styled";
import { Typography, Select } from "../../../../shared/elements";
import { Dropdown } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import categoriesService from "../../../../services/admin/categories.service";

const Header = ({ categoryFilter, setCategoryFilter }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      categoriesService
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
            {categoryFilter
              ? themeCategories.filter((v) => v._id === categoryFilter)[0]
                  .category
              : "All"}
          </Dropdown.Toggle>
          <Dropdown.Menu className='w-100'>
            <Dropdown.Item
              key={`category-all`}
              onClick={() => setCategoryFilter("")}
            >
              All
            </Dropdown.Item>
            {themeCategories.map((item) => (
              <Dropdown.Item
                key={item._id}
                onClick={() => setCategoryFilter(item._id)}
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

export default React.memo(Header);
