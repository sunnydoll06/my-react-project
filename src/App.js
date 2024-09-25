import "./App.css";
import "bootstrap";
import List from "./component/List";
import Bootstrap from "./component/Bootstrap";
import TodoWrapper from "./component/TodoWrapper";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TodoWrapper />
      <List />
    </>
  );
}

export default App;
