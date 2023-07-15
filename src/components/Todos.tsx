import React, { useContext } from "react";
import Todo from "../model/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item: Todo) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDelete={todosCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
