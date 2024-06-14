import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/freshcart-logo.svg";
import { useToken } from "../contexts/UserTokenContext";

function Navbar() {
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
  }

  return (
    <>
      <nav id="mainNav" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Fresh cart logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {token && (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="home"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="cart">
                      Cart
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="products">
                      Products
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="categories">
                      Categories
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="brands">
                      Brands
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            <ul className="navbar-nav ms-auto d-flex mb-2 mb-lg-0  align-items-lg-center">
              <li className="d-flex gap-3 mt-2 mt-lg-0 me-lg-3 nav-item order-1 order-lg-0">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </li>

              {!token && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="login">
                      Login
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="register">
                      Register
                    </NavLink>
                  </li>
                </>
              )}

              {token && (
                <li className="nav-item">
                  <a
                    className="nav-link cursor-pointer "
                    onClick={handleSignOut}
                  >
                    LogOut
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
