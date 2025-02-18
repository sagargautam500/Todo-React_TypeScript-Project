import { useTodos } from "../store/TodosProvider";

function Todos() {
  const { todos, toggleTodoAsComplete, handleDeleteButton } = useTodos();
  let FilterData = todos;
  return (
    <>
      <ul>
        {FilterData.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsComplete(todo.id)}
              />
              <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
              {todo.completed && (
                <button type="button" onClick={()=>handleDeleteButton(todo.id)}>
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
