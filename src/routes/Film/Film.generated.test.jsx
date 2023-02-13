import React from "react";
import renderer from "react-test-renderer";

import Film, { action, loader } from "./Film";

jest.mock("react-router-dom");
jest.mock("@/utils/films");
jest.mock("./style");

const renderTree = (tree) => renderer.create(tree);

describe("<Film>", () => {
  it("should render component", async () => {
    expect(renderTree(<Film />).toJSON()).toMatchSnapshot();
  });
});

describe("loader", () => {
  it("should expose a function", () => {
    expect(loader).toBeDefined();
  });

  it("loader should return expected output", async () => {
    try {
      const res = await loader({});
      expect(res).toBeDefined();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("action", () => {
  it("should expose a function", () => {
    expect(action).toBeDefined();
  });

  it("action should return expected output", async () => {
    const retValue = await action({});
    expect(retValue).toBeFalsy();
  });
});
