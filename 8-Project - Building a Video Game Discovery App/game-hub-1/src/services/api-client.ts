import axios, { AxiosError, CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07b772d114d1402a991f57cff30d6cac",
  },
});

export { AxiosError, CanceledError };
