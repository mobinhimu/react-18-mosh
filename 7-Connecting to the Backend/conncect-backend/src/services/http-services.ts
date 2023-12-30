class HttpServices {
  endPoint: string;
  API_LINK: string;

  constructor(endPoint: string, API_LINK: string) {
    this.endPoint = endPoint;
    this.API_LINK = API_LINK;
  }

  getAll() {
    const abortController = new AbortController();
    const response = fetch(this.API_LINK + "/" + this.endPoint, {
      signal: abortController.signal,
    });
    return { response, cancel: () => abortController.abort() };
  }

  delete(id: string | number) {
    return fetch(this.API_LINK + "/" + this.endPoint + "/" + id, {
      method: "DELETE",
    });
  }

  create<T>(createdData: T) {
    return fetch(this.API_LINK + "/" + this.endPoint, {
      method: "POST",
      body: JSON.stringify(createdData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  update<T>(id: string | number, updateProperty: T) {
    return fetch(this.API_LINK + "/" + this.endPoint + "/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        ...updateProperty,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
}

const create = (endPoint: string, API_LINK: string) =>
  new HttpServices(endPoint, API_LINK);
export default create;
