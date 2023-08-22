import React from "react";

import { v4 as uuid } from "uuid";
import { TodoType } from "../declarations/todos";

interface TodosContextValue {
  todosList: TodoType[];
  addTodo: (newTodoDescription: string) => void;
  removeTodo: (todoId: string) => void;
  toggleTodoCompleted: (todoId: string) => void;
  totalItensCreated: number;
  totalItensCompleted: number;
}

const TodosContext = React.createContext<TodosContextValue | null>(null);
export default TodosContext;

import config from "../config";

/**
 * Contexto para armazenamento de ToDos
 */
export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todosList, setTodosList] = React.useState<TodoType[]>([]);

  /**
   * Preenche o estado com a lista salva no storage, se houver
   */
  React.useEffect(() => {
		try {
			const storedList = JSON.parse(
				localStorage.getItem(config.keysStorage.todosList) || "[]"
			) as TodoType[];
			if (storedList?.length > 0 && storedList[0].id) {
				setTodosList(storedList);
			}
		} catch {
			console.log("Dados inválidos no storage, inicializando com estado vazio");
		}
  }, []);

  /**
   * Atualiza o valor da lista de Todos no localStorage sempre
   * que o estado da lista mudar
   */
  React.useEffect(() => {
    localStorage.setItem(
      config.keysStorage.todosList,
      JSON.stringify(todosList)
    );

    return () => {
      localStorage.removeItem(config.keysStorage.todosList);
    };
  }, [todosList]);

  /**
   * Método para adicionar itens à lista de Todos
   * Recebe a descrição do todo e a inicializa como não completada,
   * usando um uuid aleatório
   */
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

  /**
   * Método para remover um Todo da lista pelo seu ID
   */
  const removeTodo = React.useCallback(
    (id: string) => {
      const newList = todosList.filter((item) => item.id !== id);
      setTodosList(newList);
    },
    [todosList]
  );

  /**
   * Método para alternar o estado Todo entre completado/não completado pelo seu ID
   */
  const toggleTodoCompleted = React.useCallback((id: string) => {
    setTodosList((list) =>
      list.map((item) => {
        if (item.id !== id) return item;
        return { ...item, completed: !item.completed };
      })
    );
  }, []);

  /**
   * Memo para armazenar o valor de tarefas criadas no total
   */
  const totalItensCreated = React.useMemo(() => {
    return todosList.length;
  }, [todosList.length]);

  /**
   * Memo para armazenar o valor de tarefas completadas no total
   */
  const totalItensCompleted = React.useMemo(() => {
    return todosList.filter((item) => item.completed).length;
  }, [todosList]);

  return (
    <TodosContext.Provider
      value={{
        todosList,
        addTodo,
        toggleTodoCompleted,
        removeTodo,
        totalItensCreated,
        totalItensCompleted,
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
