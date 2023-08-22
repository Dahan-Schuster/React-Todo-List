import React from "react";

import styles from "./EmptyTodosList.module.css";

import clipboardIcon from "../assets/Clipboard.png";

/**
 * EmptyTodosList documentation
 */
const EmptyTodosList: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} className={styles.icon} />
      <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.message}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
};

export default EmptyTodosList;
