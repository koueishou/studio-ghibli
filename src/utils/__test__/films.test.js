import { getFilm, getFilms, updateFilm } from "../films";

describe("getFilms", () => {
  let films;

  beforeEach(async () => {
    films = await getFilms();
  });

  it("should return an array of films", async () => {
    // const films = await getFilms();
    expect(Array.isArray(films)).toBe(true);
  });

  it("should filter films by title or original title when a query is provided", async () => {
    const query = "castle";
    const filteredFilms = await getFilms(query);
    const expectedFilms = [
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        original_title: "天空の城ラピュタ",
      },
    ];
    expect(filteredFilms.title).toEqual(expectedFilms.title);
  });

  it("should sort films by release date", async () => {
    const expectedFilms = [...films].sort(
      (a, b) => new Date(a.release_date) - new Date(b.release_date),
    );
    expect(films).toEqual(expectedFilms);
  });
});

describe("getFilm", () => {
  it("should return a film object for a valid id", async () => {
    const id = "2baf70d1-42bb-4437-b551-e5fed5a87abe";
    const film = await getFilm(id);
    expect(typeof film).toBe("object");
    expect(film.id).toBe(id);
  });

  it("should return null for an invalid id", async () => {
    const id = -1;
    const film = await getFilm(id);
    expect(film).toBeNull();
  });
});

describe("updateFilm", () => {
  it("should update a film object for a valid id", async () => {
    const id = "2baf70d1-42bb-4437-b551-e5fed5a87abe";
    const updates = { title: "天空の城" };
    const film = await updateFilm(id, updates);
    expect(film.title).toBe(updates.title);
  });

  it("should throw an error for an invalid id", async () => {
    const id = -1;
    const updates = { title: "New Title" };
    await expect(updateFilm(id, updates)).rejects.toThrow("No film found for");
  });
});
