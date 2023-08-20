import React, { useState, useEffect, useMemo } from "react";
import { Container, AddNewTheme, ThemeItem } from "./List.styled";
import { PlusLg } from "react-bootstrap-icons";
import { Typography } from "../../../../shared/elements";
import { COLORS } from "../../../../constants/colors";
import AddThemeModal from "./AddThemeModal/AddThemeModal";
import adminService from "../../../../services/admin.service";
import Item from "./Item";

const List = () => {
  const [isAddThemeModalOpen, setIsAddThemeModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      adminService
        .getAllThemes()
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

  const themes = useMemo(() => {
    return response ? response.data : [];
  }, [response]);

  console.log("====================================");
  console.log(themes);
  console.log("====================================");

  return (
    <Container>
      <AddNewTheme onClick={() => setIsAddThemeModalOpen(true)}>
        <PlusLg size={"24px"} color={COLORS.SECONDARY} />
        <Typography color={COLORS.SECONDARY} fontWeight='bold'>
          Add New Theme
        </Typography>
      </AddNewTheme>
      {themes.map((item) => (
        <Item key={`theme-${item._id}`} data={item} />
      ))}
      <AddThemeModal
        open={isAddThemeModalOpen}
        onClose={() => setIsAddThemeModalOpen(false)}
      />
    </Container>
  );
};

export default List;
