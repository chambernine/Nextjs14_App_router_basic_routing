"use client";
import React from "react";
import login from "./action";
import { useFormState } from "react-dom";

export default function Page() {
  const initState = {
    msg: "",
  };

  const [state, formAction] = useFormState(login, initState);

  return (
    <div className="flex flex-col gap-5">
      <h1>Login</h1>
      <form className="flex flex-col gap-10" action={formAction}>
        <div>
          Email : <input className="border-2" type="text" name="email"></input>
        </div>
        <div>
          Password :{" "}
          <input className="border-2" type="password" name="password"></input>
        </div>
        <div>
          <p>{state.msg}</p>
        </div>
        <button
          className="bg-blue-600 text-white rounded-lg w-24"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
