import React from "react";
import { redirect } from "react-router-dom";

import { deleteContact } from "@/utils/contacts";

export async function action({ params }) {
  try {
    await deleteContact(params.contactId);
    return redirect("/");
  } catch (error) {
    throw new Error("oh dang!");
  }
}

const Destroy = () => <div>Destroy</div>;

export default Destroy;
