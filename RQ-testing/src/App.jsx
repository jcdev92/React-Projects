import TodoList from "./components/TodoList";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/todos" element={<TodoList />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
