import React from "react";
import AddButton from "../components/AddButton";
import Input from "../components/Input";
import { useTodos } from "../contexts/TodosContext";

import styles from "./CreateTodo.module.css";

/**
 * Container para criação de um novo ítem da lista de TODOs
 */
const CreateTodo: React.FunctionComponent = () => {
  const { addTodo } = useTodos();

  const [description, setDescription] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);

  const handleChangeDescription = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.currentTarget.value);
			setError(false);
    },
    []
  );

  const handleAddTodo = React.useCallback(() => {
    if (!description) {
      setError(true);
      return;
    }

    addTodo(description);
    setDescription("");
  }, [addTodo, description]);

  return (
    <div className={styles.container}>
      <Input
        value={description}
        onChange={handleChangeDescription}
        placeholder="Adicione uma nova tarefa"
        error={error}
      />
      <AddButton label="Criar" onClick={handleAddTodo} />
    </div>
  );
};

export default CreateTodo;
