import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onDelete: (text: string) => void }> = (
  props
) => {
  const deleteHandler = (event: React.MouseEvent) => {
    props.onDelete(props.text);
  };

  return (
    <li className={classes.item} onClick={deleteHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
