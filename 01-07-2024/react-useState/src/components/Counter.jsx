import React, { useState } from "react";
import Sfera from "./Sfera";

function Counter({ onCounterChange }) {
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState(1);

  const handleClick = (increment) => {
    setCounter(counter + increment);
    setSize(size + increment * 0.1); // Incrementa la dimensione della palla
    onCounterChange(increment); // Chiamata alla funzione onCounterChange per notificare il cambiamento
  };

  return (
    <div>
      <button onClick={() => handleClick(-1)} disabled={counter <= 0}>
        -
      </button>
      Counter: {counter} {/* Mostra il numero di click */}
      <button onClick={() => handleClick(1)} disabled={counter >= 10}>
        +
      </button>
      <div className="ball-container">
        <Sfera size={size} />
      </div>
    </div>
  );
}

export default Counter;
