export const getRequest = <ResponseType>(url: string) =>
  fetcher<ResponseType>(url, "GET");

export const postRequest = <ResponseType>(url: string, payload: object) =>
  fetcher<ResponseType>(url, "POST", payload);

export const deleteRequest = <ResponseType>(url: string) =>
  fetcher<ResponseType>(url, "DELETE");

export const putRequest = <ResponseType>(url: string, payload: object) =>
  fetcher<ResponseType>(url, "PUT", payload);

export const patchRequest = <ResponseType>(url: string, payload: object) =>
  fetcher<ResponseType>(url, "PATCH", payload);

const fetcher = <ResponseType>(
  url: string,
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT",
  payload?: object
): Promise<ResponseType> => {
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  return fetch(url, {
    headers: headers,
    method,
    body: payload ? JSON.stringify(payload) : null,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Problem with request");
      }
      return response.json();
    })
    .then((json) => {
      return json as ResponseType;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
