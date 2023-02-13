import React from "react";
import renderer from "react-test-renderer";

import ErrorPage from "./ErrorPage";

jest.mock("react-router-dom");

const renderTree = (tree) => renderer.create(tree);
describe("<ErrorPage>", () => {
  it("should render component", () => {
    expect(renderTree(<ErrorPage />).toJSON()).toMatchSnapshot();
  });
});
