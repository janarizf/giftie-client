import { useFormik } from "formik";
import * as Yup from "yup";

export const useAddThemeForm = ({ onSubmit }) => {
  const initialValues = {
    backgroundimage: "",
    bodycolor: "",
    category_id: "",
    headercolor: "",
    headerimage: "",
    name: "",
    textcolor: ""
  };

  const validationSchema = Yup.object().shape({
    backgroundimage: Yup.string().notRequired(),
    bodycolor: Yup.string().notRequired(),
    category_id: Yup.string().notRequired(),
    headercolor: Yup.string().notRequired(),
    headerimage: Yup.string().notRequired(),
    name: Yup.string().notRequired(),
    textcolor: Yup.string().notRequired()
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
