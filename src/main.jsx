import "@/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@/routes/ErrorPage/ErrorPage";
import Film, {
  action as filmAction,
  loader as filmLoader,
} from "@/routes/Film/Film";
import Films, { loader as filmsLoader } from "@/routes/Films/Films";
import HomePage from "@/routes/HomePage/HomePage";
import Root, { loader as rootLoader } from "@/routes/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        // Pathless Routes
        errorElement: <ErrorPage />, // catch any errors thrown in the child routes
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "films",
            element: <Films />,
            loader: filmsLoader,
          },
          {
            path: "films/:filmId",
            element: <Film />,
            loader: filmLoader,
            action: filmAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
