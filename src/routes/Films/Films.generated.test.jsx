import React from "react";
import renderer from "react-test-renderer";

import Films, { loader } from "./Films";

jest.mock("react-router-dom");
jest.mock("@/components/FilmCard/FilmCard");
jest.mock("@/utils/films");
jest.mock("./style");

const renderTree = (tree) => renderer.create(tree);
describe("<Films>", () => {
  it("should render component", () => {
    expect(renderTree(<Films />).toJSON()).toMatchSnapshot();
  });
});

describe("loader", () => {
  it("should expose a function", () => {
    expect(loader).toBeDefined();
  });

  it("loader should return expected output", async () => {
    const retValue = await loader();
    expect(retValue).toBeTruthy();
  });
});
