import React from "react";
import renderer from "react-test-renderer";

import FilmCard from "./FilmCard";

jest.mock("react-router-dom");
jest.mock("./style");

const renderTree = (tree) => renderer.create(tree);

describe("<FilmCard>", () => {
  it("should render component", () => {
    expect(renderTree(<FilmCard />).toJSON()).toMatchSnapshot();
  });
  it("should render component with props", () => {
    expect(
      renderTree(
        <FilmCard
          film={{
            id: "",
            image: "",
            title: "",
            release_date: "",
          }}
        />,
      ).toJSON(),
    ).toMatchSnapshot();
  });
});
