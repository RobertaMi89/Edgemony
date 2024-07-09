import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/form/Form.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <h1>YOUR FARM</h1>
        <Form />
      </div>
    </>
  );
}

export default App;
