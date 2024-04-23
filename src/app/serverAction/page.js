"use client";
import React from "react";
import submitForm from "./action";

export default function page() {
  return (
    <div>
      <form action={submitForm}>
        Email <input name="email" className="border-2" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
