import React from "react";
import {
  Form, redirect, useLoaderData, useNavigate
} from "react-router-dom";

import { getContact, updateContact } from "@/utils/contacts";

export async function loader({ params }) {
  return getContact(params.contactId);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

const EditContact = () => {
  const contact = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <label htmlFor="firstName">
          <span>Name</span>
          <input
            id="firstName"
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            defaultValue={contact.first}
          />
          <input
            id="lastName"
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            defaultValue={contact.last}
          />
        </label>
      </p>
      <label htmlFor="twitter">
        <span>Twitter</span>
        <input
          id="twitter"
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label htmlFor="avatar">
        <span>Avatar URL</span>
        <input
          id="avatar"
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label htmlFor="notes">
        <span>Notes</span>
        <textarea
          id="notes"
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1); // sent back one entry in the browser's history
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
};

export default EditContact;
