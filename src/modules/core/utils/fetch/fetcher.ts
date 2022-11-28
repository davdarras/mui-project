export const getRequest = <ResponseType>(url: string) =>
  simpleFetch<ResponseType>(url, "GET");

export const postRequest = <ResponseType>(url: string, payload: object) =>
  simpleFetch<ResponseType>(url, "POST", payload);

export const deleteRequest = <ResponseType>(url: string) =>
  simpleFetch<ResponseType>(url, "DELETE");

export const putRequest = <ResponseType>(url: string, payload: object) =>
  simpleFetch<ResponseType>(url, "PUT", payload);

export const patchRequest = <ResponseType>(url: string, payload: object) =>
  simpleFetch<ResponseType>(url, "PATCH", payload);

export const postRequestMultiPart = <ResponseType>(
  url: string,
  payload: FormData
) => multipartFetch<ResponseType>(url, "POST", payload);

export const putRequestMultiPart = <ResponseType>(
  url: string,
  payload: FormData
) => multipartFetch<ResponseType>(url, "PUT", payload);

const simpleFetch = <ResponseType>(
  url: string,
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT",
  payload?: object
): Promise<ResponseType> => {
  const headers: HeadersInit = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };
  if (payload !== undefined) {
    return fetcher<ResponseType>(url, method, headers, JSON.stringify(payload));
  }
  return fetcher<ResponseType>(url, method, headers);
};

const multipartFetch = <ResponseType>(
  url: string,
  method: "POST" | "PATCH" | "PUT",
  payload?: FormData
): Promise<ResponseType> => {
  return fetcher<ResponseType>(url, method, undefined, payload);
};

const fetcher = <ResponseType>(
  url: string,
  method: string,
  headers?: HeadersInit,
  payload?: string | FormData
): Promise<ResponseType> => {
  /*
  if (typeof payload === "object") {
    payload = JSON.stringify(payload);
  }*/

  return fetch(url, {
    headers: headers,
    method,
    body: payload,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Problem with request");
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};
