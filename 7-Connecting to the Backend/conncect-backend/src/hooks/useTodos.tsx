import { useEffect, useState } from "react";
import todosServices, { TodoPostShape } from "../services/todos-services";

function useTodos() {
  const [todos, setTodos] = useState<TodoPostShape[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { cancel, response } = todosServices.getAll();

    const getTodo = async () => {
      try {
        setLoading(true);
        const res = await response;

        if (!res.ok) {
          throw new Error(
            "Failed to get what I want, got status: " + res.status
          );
        }

        const todos = await res.json();
        setTodos(todos);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error && !(err.name === "AbortError")) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    getTodo();

    return () => cancel();
  }, []);

  return { todos, error, loading, setLoading, setError, setTodos };
}

export default useTodos;
