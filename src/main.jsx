import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "@/routes/Contact";
import Destroy, { action as deleteAction } from "@/routes/Destroy";
import EditContact, {
  action as editAction,
  loader as editLoader,
} from "@/routes/Edit";
import ErrorPage from "@/routes/ErrorPage";
import Films from "@/routes/Films";
import Index from "@/routes/Index";
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
        index: true,
        element: <Index />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        element: <Destroy />,
        errorElement: <div>Oops! There was an error.</div>,
        action: deleteAction,
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
