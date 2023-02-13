import React from "react";
import renderer from "react-test-renderer";

import Root, { loader } from "./Root";

jest.mock("react-router-dom");
jest.mock("@/utils/films");

const renderTree = (tree) => renderer.create(tree);
describe("<Root>", () => {
  it("should render component", () => {
    expect(renderTree(<Root />).toJSON()).toMatchSnapshot();
  });
});

describe("loader", () => {
  it("should expose a function", () => {
    expect(loader).toBeDefined();
  });

  it("loader should return expected output", async () => {
    const retValue = await loader({});
    expect(retValue).toEqual({});
  });
});
