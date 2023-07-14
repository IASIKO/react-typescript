import React from "react";

const NewTodo = () => {
  return (
    <form>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
