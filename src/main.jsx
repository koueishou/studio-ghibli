import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact, { loader as contactLoader } from "@/routes/Contact";
import EditContact, {
  action as editAction,
  loader as editLoader,
} from "@/routes/Edit";
import ErrorPage from "@/routes/ErrorPage";
import Films from "@/routes/Films";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "@/routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: "films",
        element: <Films />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
