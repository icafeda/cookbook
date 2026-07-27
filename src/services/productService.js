import { HttpError } from "../utils/HttpError";

export async function getProductList(searchTerm) {
  const response = await fetch(
    `http://localhost:3001/444/products?name_like=${searchTerm ? searchTerm : ""}`,
  );

  if (!response.ok) {
     throw HttpError(response.statusText, response.status);
  }
  
  const data = await response.json();
  return data;
}

export async function getProduct(idRoute) {
  const response = await fetch(`http://localhost:3001/444/products/${idRoute}`);
  if (!response.ok) {
    //throw { message: response.statusText, status: response.status };
     throw HttpError(response.statusText, response.status);
  }
  const data = await response.json();
  return data;
}

export async function getFeaturedProduct() {
  const response = await fetch("http://localhost:3001/444/featured_products");
  if (!response.ok) {
    //throw { message: response.statusText, status: response.status };
     throw HttpError(response.statusText, response.status);
  }
  const data = await response.json();
  return data;
}
