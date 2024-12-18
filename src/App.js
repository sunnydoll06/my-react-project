import "./App.css";
import Bootstrap from "./pages/Bootstrap";
import TodoWrapper from "./pages/TodoWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;