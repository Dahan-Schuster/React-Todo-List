import React from "react";
import Badge from "../components/Badge";
import { useTodos } from "../contexts/TodosContext";

import styles from "./TodosQuantity.module.css";

/**
 * Container para mostrar a quantidade de Todos
 * criados e completados
 */
const TodosQuantity: React.FunctionComponent = () => {
  const { totalItensCreated, totalItensCompleted } = useTodos();

  return (
    <div className={styles.container}>
      <div className={styles.quantityWrapper}>
        <span className={styles.created}>Tarefas criadas</span>{" "}
        <Badge text={`${totalItensCreated}`} />
      </div>
      <div className={styles.quantityWrapper}>
        <span className={styles.completed}>Concluídas</span>
        <Badge
          text={`${totalItensCompleted} ${
            totalItensCompleted > 0 ? `/ ${totalItensCreated}` : ""
          }`}
        />
      </div>
    </div>
  );
};

export default TodosQuantity;
