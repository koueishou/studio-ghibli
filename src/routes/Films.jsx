import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmList from "@/components/FilmList/FilmList";

const App = () => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    try {
      const result = await axios.get("/db/data.json");
      setFilms(
        result.data.films.map((film) => {
          return {
            id: film.id,
            title: film.title,
            original_title: film.original_title,
            description: film.description,
            director: film.director,
            producer: film.producer,
            movie_banner: film.movie_banner,
            image: film.image,
            running_time: film.running_time,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <FilmList films={films}></FilmList>
    </div>
  );
};

export default App;
