import React, { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{addTodo: (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    console.log(enteredText);

    if (enteredText.trim().length === 0) {
      // throw error
      return console.log("error");
    }

    props.addTodo(enteredText)
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
