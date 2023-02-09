import React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
