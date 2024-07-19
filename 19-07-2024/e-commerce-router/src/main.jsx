import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./pages/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Donna from "./pages/Donna.jsx";
import Uomo from "./pages/Uomo.jsx";
import Bambini from "./pages/Bambini.jsx";
import Login from "./components/organisms/Login.jsx";
import Whishlist from "./pages/Whishlist.jsx";
import Cart from "./pages/Cart.jsx";
import { CartProvider } from "./providers/CartContext.jsx";
import "./index.css";
import ProductPage from "./pages/ProductPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import ProductProvider from "./providers/ProductContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "donna",
        element: <Donna />,
      },
      {
        path: "uomo",
        element: <Uomo />,
      },
      {
        path: "bambini",
        element: <Bambini />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "whishlist",
        element: <Whishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
