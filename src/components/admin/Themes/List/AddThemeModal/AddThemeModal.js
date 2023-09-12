import React, { useState, useRef, useEffect, useMemo } from "react";
import { StyledModal } from "../../../../../shared/elements";
import { Form, Dropdown, Spinner } from "react-bootstrap";
import {
  AddColor,
  SketchPickerButtonsContainer,
  SketchPickerContainer,
  StyledButton,
  ColorItem,
  ShadowActiveBorder
} from "./AddThemeModal.styled";
import { BrushFill } from "react-bootstrap-icons";
import { COLORS } from "../../../../../constants/colors";
import { SketchPicker } from "react-color";
import useOutsideContainerClick from "./../../../../../shared/utils/useOutsideContainerClick";
import { useAddThemeForm } from "./AddThemeForm";
import categoriesService from "../../../../../services/admin/categories.service";
import { Select } from "../../../../../shared/elements";
import FileUpload from "./../../../../FileUpload/FileUpload";
import themesService from "../../../../../services/admin/themes.service";
import { ErrorMessage } from "../../../../ErrorMessage";
import { ImgUpload } from "../../../../../helper";

const AddThemeModal = ({ data, open, onClose }) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [color, setColor] = useState("#FF5733");
  const [colorType, setColorType] = useState("");
  const wrapperRef = useRef(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [themeColors, setThemeColors] = useState({
    textcolor: data && data.textcolor ? [data.textcolor] : [],
    bodycolor: data && data.bodycolor ? [data.bodycolor] : [],
    headercolor: data && data.headercolor ? [data.headercolor] : []
  });
  const [headerImage, setHeaderImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const localThemeColor = JSON.parse(localStorage.getItem("themeColors"));
    if (
      localThemeColor.bodycolor.length &&
      localThemeColor.headercolor.length &&
      localThemeColor.textcolor.length
    ) {
      setThemeColors(localThemeColor);
    } else {
      setThemeColors({
        textcolor: data && data.textcolor ? [data.textcolor] : [],
        bodycolor: data && data.bodycolor ? [data.bodycolor] : [],
        headercolor: data && data.headercolor ? [data.headercolor] : []
      });
    }
  }, [data]);

  useEffect(() => {
    if (themeColors) {
      localStorage.setItem("themeColors", JSON.stringify(themeColors));
    }
  }, [themeColors]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      await categoriesService
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

  // const toggleItem = (item) => {
  //   if (selectedItems.includes(item)) {
  //     setSelectedItems(selectedItems.filter((selected) => selected !== item));
  //   } else {
  //     setSelectedItems([...selectedItems, item]);
  //   }
  // };

  const handleChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };

  const handleOpenColorPicker = (type) => {
    setColorType(type);
    setIsColorPickerOpen(true);
  };

  const handleColorPickerClose = () => {
    setIsColorPickerOpen(false);
  };

  const handleSelectColor = (color) => {
    setThemeColors({
      ...themeColors,
      [colorType]: [...themeColors[colorType], color]
    });
    if (!themeColors[colorType].length) {
      form.setFieldValue(colorType, color);
    }
    setIsColorPickerOpen(false);
  };

  useOutsideContainerClick(wrapperRef, handleColorPickerClose);

  // Form
  const handleSubmit = async (values) => {
    const newValues = values;
    const apiurl = process.env.REACT_APP_APIURL;
    if (backgroundImage) {
      const uploadedBackgroundImage = await ImgUpload(
        values.backgroundimage,
        (uploaded) => {
          return `${apiurl}lists/getImage/${uploaded.data[0].filename}`;
        }
      );
      newValues.backgroundimage = uploadedBackgroundImage;
    }

    if (headerImage) {
      const uploadedHeaderImage = await ImgUpload(
        values.headerimage,
        (uploaded) => {
          return `${apiurl}lists/getImage/${uploaded.data[0].filename}`;
        }
      );
      newValues.headerimage = uploadedHeaderImage;
    }

    if (data) {
      console.log();
      async function updateTheme() {
        await themesService
          .update(data._id, {
            ...newValues
          })
          .then((res) => {
            onClose();
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
            setIsLoading(false);
          })
          .finally(() => {
            onClose();
          });
      }
      updateTheme();
    } else {
      async function createTheme() {
        await themesService
          .create({
            ...newValues
          })
          .then((res) => {
            console.log(res);
            setHeaderImage("");
            setBackgroundImage("");
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            onClose();
          });
      }
      createTheme();
    }
  };

  const { form } = useAddThemeForm({
    data: data,
    onSubmit: handleSubmit
  });

  const handleSelectColorFromPalette = (color, type) => {
    form.setFieldValue(type, color);
  };

  useEffect(() => {
    if (headerImage) {
      form.setFieldValue("headerimage", headerImage);
    }
  }, [headerImage]);

  useEffect(() => {
    if (backgroundImage) {
      form.setFieldValue("backgroundimage", backgroundImage);
    }
  }, [backgroundImage]);

  return (
    <StyledModal
      show={open}
      onHide={() => {
        onClose();
        setIsColorPickerOpen(false);
      }}
      size='md'
    >
      <StyledModal.Header closeButton>
        <StyledModal.Title>Add Customized Theme</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='addThemeForm.name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              placeholder={"Enter name"}
              value={form.values.name}
              name='name'
              style={{
                borderColor: !!form.errors.name ? COLORS.DANGER : "#707070"
              }}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              isInvalid={!!form.errors.name}
            />
            {!!form.errors.name ? (
              <ErrorMessage errorMessage={"Please enter name"} />
            ) : (
              <React.Fragment />
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='addThemeForm.category'>
            <Form.Label>List Category</Form.Label>
            {/* <MultiSelectDropdown
              options={themesList}
              toggle={toggleItem}
              selectedOptions={selectedItems}
              type={"checkbox"}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            /> */}
            <Select $width={`100%`}>
              {isLoading ? (
                <Spinner animation='border' size='sm' />
              ) : (
                <React.Fragment>
                  <Dropdown.Toggle
                    id='dropdown-autoclose-true'
                    style={{
                      height: 38,
                      borderColor: !!form.errors.category_id
                        ? COLORS.DANGER
                        : "#707070"
                    }}
                  >
                    {themeCategories.filter(
                      (v) => v._id === form.values.category_id
                    ).length
                      ? themeCategories
                          .filter((v) => v._id === form.values.category_id)
                          .map((i) => i.category)
                      : "Select Category"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='w-100'>
                    {themeCategories.map((item) => (
                      <Dropdown.Item
                        key={item._id}
                        onClick={() =>
                          form.setFieldValue("category_id", item._id)
                        }
                      >
                        {item.category}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>

                  {!!form.errors.category_id ? (
                    <ErrorMessage errorMessage={"Please select category"} />
                  ) : (
                    <React.Fragment />
                  )}
                </React.Fragment>
              )}
            </Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='addThemeForm.textColor'>
            <Form.Label>Text Color</Form.Label>
            <div className='d-flex gap-1'>
              {themeColors.textcolor &&
                themeColors.textcolor.map((i) => (
                  <ShadowActiveBorder
                    style={{
                      boxShadow:
                        form.values.textcolor === i
                          ? "0 0 0 1px #ccc"
                          : "0 0 0 1px transparent"
                    }}
                  >
                    <ColorItem
                      key={`text-color-${i}`}
                      $backgroundColor={i}
                      onClick={() =>
                        handleSelectColorFromPalette(i, "textcolor")
                      }
                    />
                  </ShadowActiveBorder>
                ))}
              <AddColor
                onClick={() => handleOpenColorPicker("textcolor")}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              >
                <BrushFill style={{ fontSize: "14px" }} color={COLORS.DANGER} />
              </AddColor>
            </div>
            {!!form.errors.textcolor ? (
              <ErrorMessage errorMessage={"Please select text color"} />
            ) : (
              <React.Fragment />
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='addThemeForm.backgroundColor'>
            <Form.Label>Background Color</Form.Label>
            <div className='d-flex gap-1'>
              {themeColors.bodycolor &&
                themeColors.bodycolor.map((i) => (
                  <ShadowActiveBorder
                    style={{
                      boxShadow:
                        form.values.bodycolor === i
                          ? "0 0 0 1px #ccc"
                          : "0 0 0 1px transparent"
                    }}
                  >
                    <ColorItem
                      key={`body-color-${i}`}
                      $backgroundColor={i}
                      onClick={() =>
                        handleSelectColorFromPalette(i, "bodycolor")
                      }
                    />
                  </ShadowActiveBorder>
                ))}
              <AddColor
                onClick={() => handleOpenColorPicker("bodycolor")}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              >
                <BrushFill style={{ fontSize: "13px" }} color={COLORS.DANGER} />
              </AddColor>
            </div>
            {!!form.errors.bodycolor ? (
              <ErrorMessage errorMessage={"Please select background color"} />
            ) : (
              <React.Fragment />
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='addThemeForm.headerColor'>
            <Form.Label>Header Color</Form.Label>
            <div className='d-flex gap-1'>
              {themeColors.headercolor &&
                themeColors.headercolor.map((i) => (
                  <ShadowActiveBorder
                    style={{
                      boxShadow:
                        form.values.headercolor === i
                          ? "0 0 0 1px #ccc"
                          : "0 0 0 1px transparent"
                    }}
                  >
                    <ColorItem
                      key={`header-color-${i}`}
                      $backgroundColor={i}
                      onClick={() =>
                        handleSelectColorFromPalette(i, "headercolor")
                      }
                      className={form.values.headercolor === i && "isSelected"}
                    />
                  </ShadowActiveBorder>
                ))}
              <AddColor
                onClick={() => handleOpenColorPicker("headercolor")}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              >
                <BrushFill style={{ fontSize: "13px" }} color={COLORS.DANGER} />
              </AddColor>
            </div>
            {!!form.errors.headercolor ? (
              <ErrorMessage errorMessage={"Please select header color"} />
            ) : (
              <React.Fragment />
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Header Image</Form.Label>
            <FileUpload
              key={`file-headerimage}`}
              img={form.values.headerimage}
              onFileSelected={setHeaderImage}
              isError={!!form.errors.headerimage}
            />
            {!!form.errors.headerimage ? (
              <ErrorMessage errorMessage={"Please select header image"} />
            ) : (
              <React.Fragment />
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Background Image</Form.Label>
            <FileUpload
              key={`file-backgroundimage`}
              img={form.values.backgroundimage}
              onFileSelected={setBackgroundImage}
              isError={!!form.errors.backgroundimage}
            />
            {!!form.errors.backgroundimage ? (
              <ErrorMessage errorMessage={"Please select background image"} />
            ) : (
              <React.Fragment />
            )}
          </Form.Group>
        </Form>
      </StyledModal.Body>
      {isColorPickerOpen ? (
        <SketchPickerContainer ref={wrapperRef}>
          <SketchPicker color={color} onChange={handleChange} />
          <SketchPickerButtonsContainer>
            <StyledButton onClick={() => handleSelectColor(color)}>
              Select
            </StyledButton>
            <StyledButton
              className='secondary'
              onClick={() => setIsColorPickerOpen(false)}
            >
              Close
            </StyledButton>
          </SketchPickerButtonsContainer>
        </SketchPickerContainer>
      ) : (
        <React.Fragment />
      )}
      <StyledButton
        style={{ height: 40, marginTop: 20 }}
        onClick={form.handleSubmit}
      >
        {data ? "Update" : "Add"} Theme
      </StyledButton>
    </StyledModal>
  );
};

export default AddThemeModal;
