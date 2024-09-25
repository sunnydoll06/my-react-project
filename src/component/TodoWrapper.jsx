import CreateForm from "./CreateForm";
import Todo from "./Todo";
import { v4 } from "uuid";
import { API_GET_DATA } from "./Constants";
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

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const submittingTodos = useRef(false);

  useEffect(() => {
    if (!submittingTodos.current) {
      return;
    }
    fetchSetTodo(todos)
    .then(todos => submittingTodos.current = false);
  }, [todos]);

  useEffect(() => {
    fetchTodo(setTodos);
  }, []);

  const addTodo = function (content, date, time) {
    submittingTodos.current = true;
    setTodos([
      {
        content: content,
        date: date,
        time: time,
        id: v4(),
        isCompleted: false,
        isEditing: false,
      },
      ...todos,
    ]);
  };

  const deleteTodo = function (id) {
    submittingTodos.current = true;
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleCompleted = (id) => {
    submittingTodos.current = true;
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toggleIsEditing = (id) => {
    submittingTodos.current = true;
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };

  const editTodo = (id, newContent, newDate, newTime) => {
    submittingTodos.current = true;
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              content: newContent,
              date: newDate,
              time: newTime,
              isCompleted: false,
              isEditing: false,
            }
          : todo;
      })
    );
  };

  return (
    <>
      <div className="wrapper">
        <h1>待辦事項</h1>
        <CreateForm 
          addTodo={addTodo} 
          submittingTodos={submittingTodos}/>
        {todos.map((todo) => {
          return (
            <Todo
              toggleCompleted={toggleCompleted}
              toggleIsEditing={toggleIsEditing}
              editTodo={editTodo}
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              submittingTodos={submittingTodos}
              />
            );
        })}
      </div>
    </>
  );
}

export default TodoWrapper;
