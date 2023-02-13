import React, { useEffect } from "react";
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import { getFilms } from "@/utils/films";

// Here are standard web objects: Request, URL, URLSearchParams.
export async function loader({ request }) {
  if (!request) return {};
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const films = await getFilms(q);
  return { films, q };
}

const Root = () => {
  let films;
  let q;
  const loaderData = useLoaderData();
  if (loaderData?.films) films = loaderData.films;
  if (loaderData?.q) q = loaderData.q;
  const navigation = useNavigation();
  const submit = useSubmit();

  // The `navigation.location` will show up
  // when the app is navigating to a new URL and loading the data for it.
  // Therefore, the spinner will go away when there is no pending navigation anymore.
  const searching = navigation?.location
    && new URLSearchParams(navigation.location.search).has("q");

  const getNavLinkClass = ({ isActive, isPending }) => {
    if (isActive) {
      return "active";
    }
    if (isPending) {
      return "pending";
    }
    return "";
  };

  useEffect(() => {
    document.getElementById("q").value = q;
  }, []);

  return (
    <>
      <div id="sidebar">
        <h1>Studio Ghibli Films</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search films"
              placeholder="Search"
              type="search"
              name="q"
              // JSX "defaultValue" prop is the original "value" field of HTML <Input> element
              // JSX "value" prop is in sync with React state
              defaultValue={q}
              // the `currentTarget.form` is the input's parent form node
              // The submit function will serialize and submit any form you pass to it.
              onChange={(event) => {
                // submit(event.currentTarget.form);
                const isFirstSearch = q == null; // if this is the first search or not
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch, // only want to replace search results
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite" />
          </Form>
        </div>
        <nav>
          {films && films.length ? (
            <ul>
              <li>
                <NavLink to="films" className={getNavLinkClass} end>
                  All Films
                </NavLink>
              </li>
              {films.map((film) => (
                <li key={film.id}>
                  <NavLink to={`films/${film.id}`} className={getNavLinkClass}>
                    {film.title}
                    {" "}
                    {film.favorite === "true" && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No films</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation?.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Root;
