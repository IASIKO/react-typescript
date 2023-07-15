import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {
  

  return (
    <div>
      <NewTodo addTodo={addTodoHandler} />
      <Todos items={todos} onDelete={deleteTodoHandler}/>
    </div>
  );
}

export default App;
