import PropTypes from "prop-types";
import React from "react";
import { useFetcher, useLoaderData } from "react-router-dom";

import { getFilm, updateFilm } from "@/utils/films";

import * as Style from "./style";

export async function loader({ params }) {
  const film = await getFilm(params.filmId);
  // Throw a 404 response in the loader
  if (!film) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return film;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  return updateFilm(params.filmId, {
    favorite: formData.get("favorite") === "true" ? "true" : "false",
  });
}

const Favorite = ({ film }) => {
  const fetcher = useFetcher();

  let { favorite } = film;
  // Optimistic UI:
  // If the fetcher has any formData being submitted, the star change to the new state immediately.
  // When the action is done, we're back to using the actual data.
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true" ? "true" : "false";
  }

  return (
    <Style.FavoriteForm>
      <fetcher.Form method="post">
        <Style.FavoriteButton
          type="submit"
          name="favorite"
          value={favorite === "true" ? "false" : "true"}
          aria-label={
            favorite === "true" ? "Remove from favorites" : "Add to favorites"
          }
        >
          {favorite === "true" ? "★" : "☆"}
        </Style.FavoriteButton>
      </fetcher.Form>
    </Style.FavoriteForm>
  );
};

const Film = () => {
  const film = useLoaderData();
  const minutes = film.running_time % 60;
  const hours = Math.floor(film.running_time / 60);

  return (
    <Style.FilmContainer>
      <Style.FilmBanner src={film.movie_banner} alt="film banner" />
      <Style.Row style={{ justifyContent: "space-between" }}>
        <Style.Column style={{ width: "100%" }}>
          <Style.Row style={{ gap: "8px" }}>
            <Favorite film={film} />
            <Style.Title>{film.title}</Style.Title>
          </Style.Row>
          <Style.Row
            style={{
              width: "100%",
              gap: "32px",
            }}
          >
            <p>{film.release_date}</p>
            <Style.Score>{film.rt_score}</Style.Score>
            <p>{`${hours}h ${minutes}min`}</p>
          </Style.Row>
        </Style.Column>
        <Style.Column>
          <p style={{ whiteSpace: "nowrap" }}>
            <span style={{ color: "#87CEEB" }}>Director:</span>
            {" "}
            {film.director}
          </p>
          <p style={{ whiteSpace: "nowrap" }}>
            <span style={{ color: "#87CEEB" }}>Producer:</span>
            {" "}
            {film.producer}
          </p>
        </Style.Column>
      </Style.Row>
      <Style.Description>{film.description}</Style.Description>
    </Style.FilmContainer>
  );
};

Favorite.propTypes = {
  film: PropTypes.shape({
    favorite: PropTypes.string,
  }),
};
Favorite.defaultProps = {
  film: {},
};

export default Film;
