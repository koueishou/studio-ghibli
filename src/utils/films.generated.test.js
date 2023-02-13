import { getFilm, getFilms, updateFilm } from "./films";

jest.mock("axios");
jest.mock("localforage");
jest.mock("match-sorter");
jest.mock("sort-by");

describe("getFilms", () => {
  it("should expose a function", () => {
    expect(getFilms).toBeDefined();
  });

  it("getFilms should return expected output", async () => {
    const retValue = await getFilms("");
    expect(retValue).toBeTruthy();
  });
});
describe("getFilm", () => {
  it("should expose a function", () => {
    expect(getFilm).toBeDefined();
  });

  it("getFilm should return expected output", async () => {
    const retValue = await getFilm("");
    expect(retValue).toEqual(null);
  });
});
describe("updateFilm", () => {
  it("should expose a function", () => {
    expect(updateFilm).toBeDefined();
  });

  it("updateFilm should return expected output", async () => {
    try {
      const retValue = await updateFilm("", {});
      expect(retValue).toEqual(null);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
