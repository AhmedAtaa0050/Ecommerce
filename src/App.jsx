import { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import SpinnerFullPage from "./ui/SpinnerFullPage/SpinnerFullPage.jsx";
import { UserTokenProvider } from "./contexts/UserTokenContext.jsx";
import ProtectRoutes from "./contexts/ProtectRoutes.jsx";

const Layout = lazy(() => import("./ui/Layout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const Categories = lazy(() => import("./pages/Categories.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const Brands = lazy(() => import("./pages/Brands.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={"home"} replace /> },
        {
          path: "home",
          element: (
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectRoutes>
              <Cart />
            </ProtectRoutes>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectRoutes>
              <Categories />
            </ProtectRoutes>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectRoutes>
              <Products />
            </ProtectRoutes>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectRoutes>
              <Brands />
            </ProtectRoutes>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <UserTokenProvider>
        <RouterProvider router={routers}></RouterProvider>
      </UserTokenProvider>
    </Suspense>
  );
}

export default App;
