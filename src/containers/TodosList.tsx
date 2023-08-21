import React from "react";

import styles from "./TodosList.module.css";

import { useTodos } from "../contexts/TodosContext";
import TodoItem from "./TodoItem";

/**
 * Container de listagem de todos
 */
const TodosList: React.FunctionComponent = () => {
  const { todosList } = useTodos();

  return (
    <div className={styles.container}>
      {todosList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodosList;
