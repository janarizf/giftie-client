import React, { useState, useEffect, useMemo } from "react";
import { Container, AddNewTheme } from "./List.styled";
import { PlusLg } from "react-bootstrap-icons";
import { Typography } from "../../../../shared/elements";
import { COLORS } from "../../../../constants/colors";
import AddThemeModal from "./AddThemeModal/AddThemeModal";
import themeService from "../../../../services/admin/themes.service";
import Item from "./Item";
import { Spinner } from "react-bootstrap";

const List = ({ categoryFilter }) => {
  const [isAddThemeModalOpen, setIsAddThemeModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    if (categoryFilter) {
      async function fetchData() {
        await themeService
          .getByCategory(categoryFilter)
          .then((response) => {
            setResponse(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
      fetchData();
    } else {
      async function fetchData() {
        await themeService
          .getAll()
          .then((response) => {
            setResponse(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
      fetchData();
    }
    return;
  }, [categoryFilter]);

  const themes = useMemo(() => {
    return response ? response.data : [];
  }, [response]);

  const handleSelectTheme = (themeId) => {
    if (themeId) {
      themeService
        .getById(themeId)
        .then((response) => {
          if (response.data) {
            setSelectedTheme(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsAddThemeModalOpen(true);
        });
    }
  };

  if (isLoading)
    return (
      <div className='w-100 d-flex align-center justify-content-center'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  else
    return (
      <Container>
        <React.Fragment>
          <AddNewTheme onClick={() => setIsAddThemeModalOpen(true)}>
            <PlusLg size={"24px"} color={COLORS.SECONDARY} />
            <Typography color={COLORS.SECONDARY} fontWeight='bold'>
              Add New Theme
            </Typography>
          </AddNewTheme>
          {themes.map((item) => (
            <Item
              key={`theme-${item._id}`}
              data={item}
              onClick={() => handleSelectTheme(item._id)}
            />
          ))}
          <AddThemeModal
            open={isAddThemeModalOpen}
            data={selectedTheme}
            onClose={() => {
              setIsAddThemeModalOpen(false);
              setSelectedTheme(undefined);
            }}
          />
        </React.Fragment>
      </Container>
    );
};

export default List;
