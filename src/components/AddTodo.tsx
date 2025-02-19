import { FormEvent, useState } from "react";
import { useTodos } from "../store/TodosProvider";
import './AddTodo.css'


function AddTodo() {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(""); // State to store error message
  const{handleAddTodo} =useTodos();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(todo){
      setError('')
      handleAddTodo(todo);
    }else{
      setError("Please enter some message !")
    }
    setTodo("");
  };

  return (
    <>
     {error && <p className="errorMsg">{error}</p>}
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    </>
  );
}

export default AddTodo;
