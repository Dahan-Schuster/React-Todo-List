import React from "react";

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
      id: "dasdas",
      description: newTodoDescription,
      completed: false,
    };

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
