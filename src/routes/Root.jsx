import React from "react";
import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
} from "react-router-dom";

import { createContact, getContacts } from "@/utils/contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

const Root = () => {
  const { contacts } = useLoaderData();

  const getNavLinkClass = ({ isActive, isPending }) => {
    if (isActive) {
      return "active";
    }
    if (isPending) {
      return "pending";
    }
    return "";
  };

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden />
            <div className="sr-only" aria-live="polite" />
          </form>
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
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
