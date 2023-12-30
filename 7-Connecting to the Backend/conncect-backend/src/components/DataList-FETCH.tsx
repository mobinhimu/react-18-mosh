import { useEffect, useState } from "react";

interface UserPost {
  id: number;
  title: string;
  body: string;
}

function DataList() {
  const [todos, setTodos] = useState<UserPost[]>([]);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const getTodo = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal: abortController.signal,
        });

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

    return () => abortController.abort();
  }, []);

  return (
    <>
      {err && <p>{err}</p>}
      {loading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {todos.map(({ body, id, title }) => (
          <li
            key={id}
            className="list-group-item p-2 d-flex align-items-center justify-content-between"
          >
            <div>
              <h3>{title}</h3>
              <span>{body}</span>
            </div>
            <button className="btn btn-outline-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DataList;
