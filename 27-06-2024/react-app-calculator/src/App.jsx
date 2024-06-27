import { useState } from "react";
import { Counter } from "./components/Counter";
import Display from "./components/Display";
import { Keyboard } from "./components/Keyboard";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => {
      if (value === "AC") {
        return "0";
      } else if (value === "Reset") {
        return "0";
      } else if (value === "+/-") {
        return (parseFloat(prevValue) * -1).toString();
      } else if (value === "%" && !isNaN(parseFloat(prevValue))) {
        return (parseFloat(prevValue) / 100).toString();
      } else {
        // Concatenazione dei valori digitati
        return prevValue === "0"
          ? value.toString()
          : prevValue + value.toString();
      }
    });
  };
  return (
    <>
      <div className="calculator">
        <Display value={displayValue} />
        <Keyboard onButtonClick={handleButtonClick} />
      </div>

      <div className="container">
        <Counter />
      </div>
    </>
  );
}

export default App;
