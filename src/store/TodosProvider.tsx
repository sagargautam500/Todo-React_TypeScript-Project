import { createContext, ReactNode, useContext, useState } from "react";

export type TodosProviderProp = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsComplete: (id: string) => void;
  handleDeleteButton: (id: string) => void;
};

export const todosContext = createContext<TodoContext | null>(null);

function TodosProvider({ children }: TodosProviderProp) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      let newTodos = localStorage.getItem("localTodos") || "[]";   //get data from local storage now::
      return JSON.parse(newTodos);
    } catch (error) {
      return [];
    }
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("localTodos", JSON.stringify(newTodos)); //local storage save data using serItem() method
      return newTodos;
    });
  };

  //Toggle asCompletd:
  // const toggleTodoAsComplete = (id: string) => {
  //   setTodos((prev) => {
  //     let newTodos = prev.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       } else {
  //         return todo;
  //       }
  //     });
  //     return newTodos;
  //   });
  // };
  const toggleTodoAsComplete = (id: string) => {
    setTodos((prevTodos) => {
      let newTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("localTodos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  //handleDeleteButton..
  const handleDeleteButton = (id: string) => {
    // setTodos((prev) => {
    //   let newTodos = prev.filter((todo) => todo.id !== id);
    //   return newTodos;
    // });
    let newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("localTodos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsComplete, handleDeleteButton }}
    >
      {children}
    </todosContext.Provider>
  );
}

export default TodosProvider;

//consumer
export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("useTodos used outside the provider");
  }
  return todosConsumer;
};
