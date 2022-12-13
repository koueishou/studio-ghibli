import PropTypes from "prop-types";
import React from "react";
import { useFetcher, useLoaderData } from "react-router-dom";

import { getFilm, updateFilm } from "@/utils/films";

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
    <fetcher.Form method="post">
      <button
        type="submit"
        name="favorite"
        value={favorite === "true" ? "false" : "true"}
        aria-label={
          favorite === "true" ? "Remove from favorites" : "Add to favorites"
        }
      >
        {favorite === "true" ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};

const Film = () => {
  const film = useLoaderData();

  return (
    <div id="film">
      <div>
        <img src={film.image || null} alt="" />
      </div>

      <div>
        <h1>
          {film.title}
          <Favorite film={film} />
        </h1>

        {film.original_title && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${film.original_title}`}
              rel="noreferrer"
            >
              {film.original_title}
            </a>
          </p>
        )}

        {film.description && <p>{film.description}</p>}
      </div>
    </div>
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
