import { HttpError } from "../utils/HttpError";

//LoginPage
export async function loginService(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    requestOptions,
  );

  if (!response.ok) {
    throw HttpError(response.statusText, response.status);
  }

  const data = await response.json();
  return data;
}

//RegisterPage
export async function registerService(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);

    if (!response.ok) {
      throw HttpError(response.statusText, response.status);
  }
  
  const data = await response.json();
  return data;
}
