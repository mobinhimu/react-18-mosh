import todosServices, {
  TodoPost,
  TodoPostShape,
} from "../services/todos-services";
import useTodos from "../hooks/useTodos";

function DataList() {
  const { error, loading, todos, setError, setLoading, setTodos } = useTodos();

  async function handleDeleteTodos(id: number | string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setLoading(true);
    try {
      const res = await todosServices.delete(id);
      if (!res.ok) {
        throw new Error("Failed to UPDATE, got status: " + res.status);
      }
      setTodos(updatedTodos);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setLoading(false);
      }
    }
  }

  async function handleAddTodo() {
    const dummyTodo: TodoPostShape = {
      body: "Mobin " + Math.random(),
      id: crypto.randomUUID(),
      title: crypto.randomUUID(),
    };

    setLoading(true);
    try {
      const res = await todosServices.create(dummyTodo);

      if (!res.ok) {
        throw new Error("Failed to UPDATE, got status: " + res.status);
      }
      setTodos([...todos, dummyTodo]);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setLoading(false);
      }
    }
  }

  async function updateData(id: string | number) {
    const targetUpdatedObj: TodoPost = {
      body: "Hello World",
      title: "No - Way TO Set Title Here",
    };

    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, ...targetUpdatedObj } : todo
    );

    setLoading(true);
    try {
      const res = await todosServices.update(id, targetUpdatedObj);

      if (!res.ok) {
        throw new Error("Failed to UPDATE, got status: " + res.status);
      }
      setTodos(updatedTodo);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setLoading(false);
      }
    }
  }

  return (
    <>
      <h4 className="p-2">Number Of Todos {todos.length}</h4>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border d-block mb-3"></div>}

      <button className="mb-4 btn btn-success" onClick={handleAddTodo}>
        {" "}
        ADD TODO
      </button>

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
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDeleteTodos(id)}
              >
                Delete
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => updateData(id)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DataList;
