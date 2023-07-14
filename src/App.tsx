import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo addTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
