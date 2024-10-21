import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({name:e.target.value,done:false})}
            value={todo.name}
            type="text"
            placeholder="Enter Todo Item..."
          ></input>
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
