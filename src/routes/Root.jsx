import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => (
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
        <form method="post">
          <button type="submit">New</button>
        </form>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="contacts/1">Your Name</Link>
          </li>
          <li>
            <Link to="contacts/2">Your Friend</Link>
          </li>
          <li>
            <Link to="films">Ghibli Films</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div id="detail">
      <Outlet />
    </div>
  </>
);

export default Root;
