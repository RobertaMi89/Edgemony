import React, { useState } from "react";

function RandomNumberButton({ onGenerate }) {
  const [isDead, setIsDead] = useState(false);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    onGenerate(number);
    setIsDead(true); // Cambia lo stato per mostrare l'immagine di Crilin morto
  };

  return (
    <div>
      <button className="btnRandom" onClick={generateRandomNumber}>
        Quante volte nel frattempo è morto Crilin?
      </button>
      <img
        src={
          isDead ? "./src/assets/crilinMorto.png" : "./src/assets/crilin.png"
        }
        alt="crilin"
        style={{ width: "200px" }}
      />
    </div>
  );
}

export default RandomNumberButton;
