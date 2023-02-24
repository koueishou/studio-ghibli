import { render, screen } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "../ErrorPage";

// Mocking router it's own history stack in memory
const mockRoutes = [
  {
    path: "/error-page",
    element: <ErrorPage />,
  },
];
const mockRouter = createMemoryRouter(mockRoutes, {
  initialEntries: ["/", "/error-page"],
  initialIndex: 1,
});
const MockErrorPage = () => <RouterProvider router={mockRouter} />;

// Mocking console.error
const original = console.error;
beforeEach(() => {
  console.error = jest.fn();
  // console.error("you cant see me");
});
afterEach(() => {
  // console.error("you cant see me");
  console.error = original;
  // console.error("now you can");
});

test("should ", () => {
  render(<MockErrorPage />);
  const headingElement = screen.getByText(/Oops/i);
  expect(headingElement).toBeInTheDocument();
});
