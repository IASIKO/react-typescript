import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    });

  };
  

  return (
    <div>
      <NewTodo addTodo={addTodoHandler} />
      <Todos items={todos} onDelete={deleteTodoHandler}/>
    </div>
  );
}

export default App;
