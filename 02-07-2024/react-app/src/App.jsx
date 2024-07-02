import { useState } from "react";
import AdviceGenerator from "./components/generator/AdviceGenerator.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AdviceGenerator />
    </div>
  );
}

export default App;
