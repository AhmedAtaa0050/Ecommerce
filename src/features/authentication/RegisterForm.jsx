import useRegisterValidate from "./useRegisterValidate";

function RegisterForm() {
  const { formik, error, isLoading } = useRegisterValidate();

  return (
    <div className="w-100">
      <div className="py-5 w-75 mx-auto">
        <h2 className="mb-4">Register Now</h2>

        <form action="" onSubmit={formik.handleSubmit}>
          <label htmlFor="name" className="mb-1">
            Name:
          </label>
          <input
            type="text"
            autoComplete="o ff"
            className="form-control mb-3"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="alert alert-danger font-sm">
              {formik.errors.name}
            </div>
          )}

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
            <div className="alert alert-danger font-sm">
              {formik.errors.email}
            </div>
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
            <div className="alert alert-danger font-sm">
              {formik.errors.password}
            </div>
          )}

          <label htmlFor="rePassword" className="mb-1">
            rePassword:
          </label>
          <input
            type="password"
            autoComplete="o ff"
            className="form-control mb-3"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="rePassword"
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="alert alert-danger font-sm">
              {formik.errors.rePassword}
            </div>
          )}

          <label htmlFor="phone" className="mb-1">
            phone:
          </label>
          <input
            type="tel"
            autoComplete="o ff"
            className="form-control mb-3"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="phone"
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="alert alert-danger font-sm">
              {formik.errors.phone}
            </div>
          )}

          <button
            disabled={!(formik.isValid && formik.dirty && !isLoading)}
            type="submit"
            className="btn bg-main text-white my-3"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
          {error && <div className="alert alert-danger font-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
