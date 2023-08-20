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
