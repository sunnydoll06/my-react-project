import "./App.css";
import Bootstrap from "./pages/Bootstrap";
import TodoWrapper from "./pages/TodoWrapper";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
      </Routes>
    </HashRouter>
  );
}

export default App;