import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo addTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
