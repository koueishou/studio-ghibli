import React, { useEffect } from "react";
import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import { createContact, getContacts } from "@/utils/contacts";

// Here are standard web objects: Request, URL, URLSearchParams.
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

const Root = () => {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  // The `navigation.location` will show up
  // when the app is navigating to a new URL and loading the data for it.
  // Therefore, the spinner will go away when there is no pending navigation anymore.
  const searching = navigation.location
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
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
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
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={getNavLinkClass}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first}
                        {" "}
                        {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="films" className={getNavLinkClass}>
                  Ghibli Films
                </NavLink>
              </li>
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Root;
