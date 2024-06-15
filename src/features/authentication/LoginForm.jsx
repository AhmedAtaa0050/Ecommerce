import { Link } from "react-router-dom";
import useLoginValidate from "./useLoginValidate";

function LoginForm() {
  const { error, isLoading, formik } = useLoginValidate();

  return (
    <div className="w-100">
      <div className="py-5 w-75 mx-auto">
        <h2 className="mb-4">Login Now</h2>

        <form action="" onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            type="email"
            autoComplete="o ff"
            className="form-control mb-3"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="alert alert-danger fs-6">{formik.errors.email}</div>
          )}

          <label htmlFor="password" className="mb-1">
            Password:
          </label>
          <input
            type="password"
            autoComplete="o ff"
            className="form-control mb-3"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="alert alert-danger fs-6">
              {formik.errors.password}
            </div>
          )}

          <div className="d-flex align-items-center gap-3 mb-3">
            <button
              disabled={!(formik.isValid && formik.dirty && !isLoading)}
              type="submit"
              className="btn bg-main text-white "
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <Link to={"/register"} className="register-link">
              Register
            </Link>
          </div>

          {error && <div className="alert alert-danger fs-6">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
