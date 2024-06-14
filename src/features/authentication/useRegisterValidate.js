import { useFormik } from "formik";
import { BASE_URL, emailRgx, phoneRgx } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function validate(values) {
  const errors = {};

  //  0 is empty so i didn't use (!) !values.name
  if (values.name === "") {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Name must be less 16 characters and more 2 ";
  } else if (values.name.length < 3) {
    errors.name = "Name must be more 2 characters and less 15 ";
  }

  if (values.email === "") {
    errors.email = "Required";
  } else if (!emailRgx.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.password === "") {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "min lenght is 6 ";
  }

  if (values.rePassword === "") {
    errors.rePassword = "Required";
  } else if (values.rePassword !== values.password) {
    errors.rePassword = "Passwords are not identical";
  }

  if (values.phone === "") {
    errors.phone = "Required";
  } else if (!phoneRgx.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  return errors;
}

function useRegisterValidate() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validate,
    onSubmit: async function (values) {
      try {
        setIsLoading(true);
        setError("");
        const { data } = await axios.post(`${BASE_URL}/auth/signup`, values);

        if (data.message !== "success") throw new Error("");

        navigate("/login");
      } catch (err) {
        const errData = err.response.data;
        setError(errData.errors?.msg || errData.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return { formik, error, isLoading };
}

export default useRegisterValidate;
