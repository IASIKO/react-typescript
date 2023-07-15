import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {
  

  return (
    <div>
      <NewTodo/>
      <Todos/>
    </div>
  );
}

export default App;
