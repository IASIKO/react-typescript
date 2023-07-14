import React from "react";
import Todo from "../model/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[], onDelete: () => void }> = (props) => {
  

  return (
    <ul className={classes.todos}>
      {props.items.map((item: Todo) => (
        <TodoItem key={item.id} text={item.text} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
