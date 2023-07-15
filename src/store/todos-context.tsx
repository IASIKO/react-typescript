import { createContext } from "react";

const todosContext = createContext({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});
