import React from "react";

import { v4 as uuid } from "uuid";

type TodoType = {
  description: string;
  completed: boolean;
  id: string;
};

interface TodosContextValue {
  todosList: TodoType[];
  addTodo: (newTodoDescription: string) => void;
}

const TodosContext = React.createContext<TodosContextValue | null>(null);
export default TodosContext;

/**
 * Contexto para armazenamento de ToDos
 */
export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todosList, setTodosList] = React.useState<TodoType[]>([]);

  const addTodo = React.useCallback((newTodoDescription: string) => {
    if (!newTodoDescription) return;

    const newTodo = {
      id: uuid(),
      description: newTodoDescription,
      completed: false,
    };

		console.log(newTodo);
    setTodosList((list) => [...list, newTodo]);
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todosList,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = React.useContext(TodosContext);

  if (!context) {
    throw new Error("useTodos must be used within an TodosProvider");
  }

  return context;
};
