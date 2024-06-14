import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="d-flex flex-column min-height-100 ">
        <Navbar />
        <div className="container my-5 flex-grow-1 d-flex align-items-center justify-content-center flex-column">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
