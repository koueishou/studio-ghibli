import { render, screen } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "../ErrorPage";

// Mocking router it's own history stack in memory
const mockedRoutes = [
  {
    path: "/error-page",
    element: <ErrorPage />,
  },
];
const mockedRouter = createMemoryRouter(mockedRoutes, {
  initialEntries: ["/", "/error-page"],
  initialIndex: 1,
});
const MockErrorPage = () => <RouterProvider router={mockedRouter} />;

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

describe("ErrorPage", () => {
  it("should render heading", () => {
    render(<MockErrorPage />);
    const headingElement = screen.getByText(/Oops/i);
    expect(headingElement).toBeInTheDocument();
  });
});
