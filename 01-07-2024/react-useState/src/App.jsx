import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import RandomNumberButton from "./components/RandomNumberButton";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const handleCounterChange = (increment) => {
    setCounter((prevCounter) => prevCounter + increment);
  };

  const handleRandomNumberChange = (number) => {
    setRandomNumber(number);
  };

  return (
    <div className="App">
      <div className="ball-container">
        <Counter onCounterChange={handleCounterChange} />
        <img src="./src/assets/goku.png" alt="" id="goku" />
        <div className="crilin">
          <RandomNumberButton onGenerate={handleRandomNumberChange} />
          {randomNumber !== null && <p> {randomNumber} volte</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
