"use server";

export default async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      msg: "Please enter email and password",
    };
  } else if ((email !== "test") & (password !== "1234")) {
    return {
      msg: "Login fail!",
    };
  } else {
    return {
      msg: "Login success!",
    };
  }
}
