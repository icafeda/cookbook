// src/utils/HttpError.js

export function HttpError(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}
