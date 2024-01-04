import { AxiosRequestConfig } from "axios";
import axios, { AxiosError, CanceledError } from "../services/api-client";
import { useEffect, useState } from "react";

interface ResponseData<T> {
  results: T[];
}
function useFetched<T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: (string | number)[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setError("");
      setLoading(true);
      const getGames = async () => {
        try {
          const response = await axios.get<ResponseData<T>>(endPoint, {
            signal: controller.signal,
            ...requestConfig,
          });
          const data = response.data.results;

          setData(data);

          setError("");
          setLoading(false);
        } catch (error) {
          if (
            error instanceof AxiosError &&
            !(error instanceof CanceledError)
          ) {
            setError(error.message);
          }
        }
      };

      getGames();

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, loading, error };
}

export default useFetched;
