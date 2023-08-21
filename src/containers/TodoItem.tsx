import React from "react";
import { useTodos } from "../contexts/TodosContext";
import { TodoType } from "../declarations/todos";
import Checkbox from "../components/Checkbox";
import DeleteButton from "../components/DeleteButton";

import styles from "./TodoItem.module.css";

interface TodoItemProps {
  item: TodoType;
}

/**
 * TodoItem documentation
 */
const TodoItem: React.FunctionComponent<TodoItemProps> = ({ item }) => {
  const { removeTodo, toggleTodoCompleted } = useTodos();
  const { id, description, completed } = item;

  const handleDeleteItem = React.useCallback(() => {
    removeTodo(id);
  }, [id, removeTodo]);

  const handleToggleItem = React.useCallback(() => {
    toggleTodoCompleted(id);
  }, [id, toggleTodoCompleted]);

  return (
    <div className={styles.itemContainer} onClick={handleToggleItem}>
      <Checkbox selected={completed} />
      <span className={completed ? styles.completed : ""}>{description}</span>
      <DeleteButton onClick={handleDeleteItem} />
    </div>
  );
};

export default TodoItem;
