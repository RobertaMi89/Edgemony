import { useState } from "react";
import styles from "./form.module.css";

function Form() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: self.crypto.randomUUID(),
        title: input,
      };
      setTodos([...todos, newTodo]);
      console.log("Added Todo ID:", newTodo.id);
      setInput("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.containerForm}>
      <input
        value={input}
        type="text"
        placeholder="Input"
        className={styles.inputDiv}
        onChange={handleChange}
      />
      <button type="submit" onClick={addTodo} className={styles.btn}>
        ADD
      </button>
      <div className={styles.containerList}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}{" "}
              <button onClick={() => handleDelete(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default Form;
