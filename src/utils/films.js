import axios from "axios";
import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Get Initial films from the JSON file
const apiGetFilms = async () => {
  try {
    const result = await axios.get("/db/data.json");
    const films = result.data.films.map((film) => ({
      id: film.id,
      title: film.title,
      original_title: film.original_title,
      image: film.image,
      movie_banner: film.movie_banner,
      description: film.description,
      director: film.director,
      producer: film.producer,
      release_date: film.release_date,
      running_time: film.running_time,
    }));
    return films;
  } catch (error) {
    return [];
  }
};

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  // eslint-disable-next-line consistent-return
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

function set(films) {
  return localforage.setItem("films", films);
}

export async function getFilms(query) {
  await fakeNetwork(`getFilms:${query}`);
  let films = await localforage.getItem("films");
  if (!films) {
    films = await apiGetFilms();
    await set(films);
  }
  if (query) {
    films = matchSorter(films, query, { keys: ["title", "original_title"] });
  }
  return films.sort(sortBy("last", "release_date"));
}

export async function getFilm(id) {
  await fakeNetwork(`film:${id}`);
  const films = await localforage.getItem("films");
  const film = films.find((item) => item.id === id);
  return film ?? null;
}

export async function updateFilm(id, updates) {
  await fakeNetwork();
  const films = await localforage.getItem("films");
  const film = films.find((item) => item.id === id);
  if (!film) throw new Error("No film found for", id);
  Object.assign(film, updates);
  await set(films);
  return film;
}
