import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/TodosProvider";

function Todos() {
  const { todos, toggleTodoAsComplete, handleDeleteButton } = useTodos();
  const[searchParams]=useSearchParams();
  let todosData=searchParams.get("todos")

  let FilterData = todos;

  if(todosData==="active"){
    FilterData=FilterData.filter((task)=>!task.completed)
  }

  if(todosData==="complete"){
    FilterData=FilterData.filter((task)=>task.completed)
  }
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
