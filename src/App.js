import "./App.css";
import TodoWrapper from "./component/TodoWrapper";
import { API_GET_DATA } from "./component/Constants";
import { useState, useEffect, useRef } from "react";

async function fetchTodo(setTodos) {
  const res = await fetch(API_GET_DATA);
  const { todos } = await res.json();
  setTodos(todos);
}

async function fetchSetTodo(todos) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });
}

function App() {
  const [todos, setTodos] = useState([]);
  const submittingTodos = useRef(false);

  useEffect(() => {
    if (!submittingTodos.current) {
      return;
    }
    fetchSetTodo(todos).then((todos) => (submittingTodos.current = false));
  }, [todos]);

  useEffect(() => {
    fetchTodo(setTodos);
  }, []);

  return (
    <>
      <TodoWrapper
        todos={todos}
        setTodos={setTodos}
        submittingTodos={submittingTodos}
      />
    </>
  );
}

export default App;
