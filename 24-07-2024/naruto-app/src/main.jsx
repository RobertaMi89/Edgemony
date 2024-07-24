import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DefaultLayout from "./components/DefaultLayout.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterPage from "./components/pages/CharacterPage.jsx";
import Create from "./components/pages/Create.jsx";
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
