import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

import localData from "@/assets/db/data.json";

// Get Initial films from the JSON file
const localGetFilms = () => {
  const result = localData.films.map((film) => ({
    id: film.id,
    title: film.title,
    original_title: film.original_title,
    original_title_romanized: film.original_title_romanized,
    image: film.image,
    movie_banner: film.movie_banner,
    description: film.description,
    director: film.director,
    producer: film.producer,
    release_date: film.release_date,
    running_time: film.running_time,
    rt_score: film.rt_score,
  }));
  return result;
};

const setFilms = (films) => localforage.setItem("films", films);

export const getFilms = async (query) => {
  try {
    let films = await localforage.getItem("films");
    if (!films || !films.length) {
      films = localGetFilms();
      await setFilms(films);
    }
    if (query) {
      films = matchSorter(films, query, { keys: ["title", "original_title"] });
    }
    return films.sort(sortBy("last", "release_date"));
  } catch (error) {
    return [];
  }
};

export const getFilm = async (id) => {
  try {
    const films = await localforage.getItem("films");
    const film = films.find((item) => item.id === id);
    return film ?? null;
  } catch (error) {
    return null;
  }
};

export const updateFilm = async (id, updates) => {
  const films = await localforage.getItem("films");
  const film = films.find((item) => item.id === id);
  if (!film) throw new Error("No film found for", id);
  Object.assign(film, updates);
  await setFilms(films);
  return film;
};
