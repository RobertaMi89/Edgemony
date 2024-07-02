import React, { useState, useEffect } from "react";
import styles from "./AdviceGenerator.module.css";
import Card from "../card/Card";

const adviceList = [
  {
    id: 1,
    text: `"Once you find a really good friend don't do anything that could mess up your friendship."`,
  },
  {
    id: 2,
    text: `"If you are feeling down, try holding a pencil between your top lip and your nose for five minutes."`,
  },
  { id: 3, text: `"Don't always rely on your comforts."` },
  { id: 4, text: `"Drink a glass of water before meals."` },
  { id: 5, text: `"Everything matters, but nothing matters that much."` },
];

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    generateAdvice();
  }, []);

  const generateAdvice = () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    setAdvice(adviceList[randomIndex]);
  };
  const handleNewAdviceClick = () => {
    generateAdvice();
  };
  return (
    <Card>
      <div className={styles.container}>
        {advice && (
          <div className={styles.adviceContainer}>
            <p className={styles.adviceId}>ADVICE # {advice.id}</p>
            <p className={styles.adviceText}>{advice.text}</p>
          </div>
        )}
      </div>
      <div>
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <button className={styles.button} onClick={handleNewAdviceClick}>
        <img src="./src/assets/icon-dice.svg" alt="button" />
      </button>
    </Card>
  );
};

export default AdviceGenerator;
