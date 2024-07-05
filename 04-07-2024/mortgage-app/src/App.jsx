import { useState } from "react";
import Form from "./components/form/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
    </>
  );
}

export default App;
