import { render, screen } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import HomePage from "../HomePage";

const mockedRoutes = [
  {
    path: "/home-page",
    element: <HomePage />,
  },
];
const mockedRouter = createMemoryRouter(mockedRoutes, {
  initialEntries: ["/", "/home-page"],
  initialIndex: 1,
});
const MockHomePage = () => <RouterProvider router={mockedRouter} />;

describe("HomePage", () => {
  it("should render heading", () => {
    render(<MockHomePage />);
    const headingElement = screen.getByText(
      /This is a fans project for Studio Ghibli/i,
    );
    expect(headingElement).toBeInTheDocument();
  });
});
