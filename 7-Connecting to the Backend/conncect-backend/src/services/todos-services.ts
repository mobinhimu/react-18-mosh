import create from "./http-services";

export const TODOS_API_LINK = "https://jsonplaceholder.typicode.com";

export type TodoID = {
  id: number | string;
};

export type TodoPost = {
  title?: string;
  body?: string;
};

export type TodoPostShape = TodoPost & TodoID;
export default create("posts", TODOS_API_LINK);
