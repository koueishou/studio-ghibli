import React from "react";
import renderer from "react-test-renderer";

import Index from "./Index";

const renderTree = (tree) => renderer.create(tree);
describe("<Index>", () => {
  it("should render component", () => {
    expect(renderTree(<Index />).toJSON()).toMatchSnapshot();
  });
});
