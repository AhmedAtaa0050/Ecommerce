import { useFormik } from "formik";
import { useToken } from "../../contexts/UserTokenContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, emailRgx } from "../../utils/helpers";

function validate(values) {
  const errors = {};

  //  0 is empty so i didn't use (!) !values.name
  if (values.email === "") {
    errors.email = "Required";
  } else if (!emailRgx.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.password === "") {
    errors.password = "Required";
  }

  return errors;
}

function useLoginValidate() {
  const { setToken } = useToken();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async function (values) {
      try {
        setIsLoading(true);
        setError("");
        const { data } = await axios.post(`${BASE_URL}/auth/signin`, values);
        if (data.message !== "success") throw new Error("");

        localStorage.setItem("userToken", data.token);
        setToken(data.token);

        navigate("/home");
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return { formik, error, isLoading };
}

export default useLoginValidate;
