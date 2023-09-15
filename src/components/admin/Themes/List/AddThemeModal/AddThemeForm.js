import { useFormik } from "formik";
import * as Yup from "yup";

export const useAddThemeForm = ({ data, onSubmit }) => {
  const initialValues = {
    backgroundimage: data && data.backgroundimage ? data.backgroundimage : "",
    bodycolor: data && data.bodycolor ? data.bodycolor : "",
    category_id: data && data.category_id ? data.category_id : "",
    headercolor: data && data.headercolor ? data.headercolor : "",
    headerimage: data && data.headerimage ? data.headerimage : "",
    name: data && data.name ? data.name : "",
    textcolor: data && data.textcolor ? data.textcolor : ""
  };

  const validationSchema = Yup.object().shape({
    backgroundimage: Yup.string().required(),
    bodycolor: Yup.string().required(),
    category_id: Yup.string().required(),
    headercolor: Yup.string().required(),
    headerimage: Yup.string().required(),
    name: Yup.string().required(),
    textcolor: Yup.string().required()
  });

  const form = useFormik({
    initialValues,
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true
  });

  return {
    form
  };
};
