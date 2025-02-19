import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/TodosProvider";
import "./Todos.css";

function Todos() {
  const { todos, toggleTodoAsComplete, handleDeleteButton } = useTodos();
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");

  let FilterData = todos;

  if(FilterData.length==0) {
    return(<>
    <h2>No Data are available !</h2>
    <h3>Add Some data .......</h3>
    </>)
  }

  if (todosData === "active") {
    FilterData = FilterData.filter((task) => !task.completed);
    if (FilterData.length == 0) {
      return <h2>No Active data are available</h2>;
    }
  }

  if (todosData === "complete") {
    FilterData = FilterData.filter((task) => task.completed);
    if (FilterData.length == 0) {
      return <h2>No Complete data are available</h2>;
    }
  }

  return (
    <>
      <ul className="todosList ">
        {FilterData.map((todo) => {
          return (
            <li key={todo.id} className="todoList ">
              <span
                className={`todosName ${todo.completed ? "todo_name" : ""}`}
              >
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => toggleTodoAsComplete(todo.id)}
                />
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
              </span>
              {todo.completed && (
                <button
                  type="button"
                  className="deleteBtn"
                  onClick={() => handleDeleteButton(todo.id)}
                >
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
