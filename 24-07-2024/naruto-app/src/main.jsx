import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DefaultLayout from "./pages/DefaultLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CharacterPage from "./pages/CharacterPage.jsx";
import Create from "./pages/Create.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NinjaProvider } from "./utils/NinjaContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "character/:id",
        element: <CharacterPage />,
      },
      {
        path: "create",
        element: <Create />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NinjaProvider>
      <RouterProvider router={router} />
    </NinjaProvider>
  </React.StrictMode>
);
