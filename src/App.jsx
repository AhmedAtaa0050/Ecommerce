import { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import SpinnerFullPage from "./ui/SpinnerFullPage/SpinnerFullPage.jsx";
import { UserTokenProvider } from "./contexts/UserTokenContext.jsx";
import ProtectRoutes from "./contexts/ProtectRoutes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductDetails from "./features/products/ProductDetails.jsx";

const Layout = lazy(() => import("./ui/Layout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const Categories = lazy(() => import("./pages/Categories.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const Brands = lazy(() => import("./pages/Brands.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

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
        path: "productDetails/:productID",
        element: (
          <ProtectRoutes>
            <ProductDetails />
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

function App() {
  const query = new QueryClient();

  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <QueryClientProvider client={query}>
        <ReactQueryDevtools initialIsOpen={false} />
        <UserTokenProvider>
          <RouterProvider router={routers}></RouterProvider>
        </UserTokenProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
