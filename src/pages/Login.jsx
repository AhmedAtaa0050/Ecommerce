// import axios from "axios";
// import { useFormik } from "formik";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { emailRgx } from "../utils/helpers";
// import { useToken } from "../contexts/UserTokenContext";

import LoginForm from "../features/authentication/LoginForm";

// function validate(values) {
//   const errors = {};

//   //  0 is empty so i didn't use (!) !values.name
//   if (values.email === "") {
//     errors.email = "Required";
//   } else if (!emailRgx.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (values.password === "") {
//     errors.password = "Required";
//   }

//   return errors;
// }

// function Login() {
//   const { setToken } = useToken();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validate,
//     onSubmit: async function (values) {
//       try {
//         setIsLoading(true);
//         setError("");
//         const { data } = await axios.post(
//           `https://ecommerce.routemisr.com/api/v1/auth/signin`,
//           values
//         );
//         if (data.message !== "success") throw new Error("");

//         localStorage.setItem("userToken", data.token);
//         setToken(data.token);

//         navigate("/home");
//       } catch (err) {
//         setError(err.response.data.message);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//   });

//   return (
//     <div>
//       <div className="py-5 w-75 mx-auto">
//         <h2 className="mb-4">Login Now</h2>

//         <form action="" onSubmit={formik.handleSubmit}>
//           <label htmlFor="email" className="mb-1">
//             Email:
//           </label>
//           <input
//             type="email"
//             autoComplete="o ff"
//             className="form-control mb-3"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             id="email"
//           />
//           {formik.errors.email && formik.touched.email && (
//             <div className="alert alert-danger fs-6">{formik.errors.email}</div>
//           )}

//           <label htmlFor="password" className="mb-1">
//             Password:
//           </label>
//           <input
//             type="password"
//             autoComplete="o ff"
//             className="form-control mb-3"
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             id="password"
//           />
//           {formik.errors.password && formik.touched.password && (
//             <div className="alert alert-danger fs-6">
//               {formik.errors.password}
//             </div>
//           )}

//           <div className="d-flex align-items-center gap-3 mb-3">
//             <button
//               disabled={!(formik.isValid && formik.dirty && !isLoading)}
//               type="submit"
//               className="btn bg-main text-white "
//             >
//               {isLoading ? "Loading..." : "Login"}
//             </button>
//             <Link to={"/register"} className="register-link">
//               Register
//             </Link>
//           </div>

//           {error && <div className="alert alert-danger fs-6">{error}</div>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

function Login() {
  return <LoginForm />;
}

export default Login;
