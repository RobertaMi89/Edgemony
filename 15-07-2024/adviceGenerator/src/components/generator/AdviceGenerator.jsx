import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { fetchAdvice } from "../api";

const AdviceGenerator = () => {
  const [count, setCount] = useState(1);
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    async function setAdviceGen() {
      try {
        const fetchedAdvice = await fetchAdvice();
        if (fetchedAdvice.id) {
          setAdvice(fetchedAdvice);
        }
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    }
    setAdviceGen();
  }, [count]);

  const handleNewAdviceClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(advice);
  }, [advice]);

  return (
    <Card>
      <div className="text-center">
        {advice ? (
          <div className="rounded-lg m-4 p-4">
            <p className="text-NeonGreen text-sm">ADVICE # {advice.id}</p>
            <p className="text-Text text-xl mt-2.5">{advice.advice}</p>
          </div>
        ) : (
          <p>Loading advice...</p>
        )}
      </div>
      <div className="text-center flex justify-center ">
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <button
        className="items-center bg-NeonGreen border-none rounded-full absolute left-1/2 transform -translate-x-1/2 bottom-0 text-Text cursor-pointer flex min-h-12 justify-center translate-x-1/2, translate-y-1/2 transition duration-300 ease-in-out p-2 w-12 active:bg-NeonGreen"
        onClick={handleNewAdviceClick}
      >
        <img src="./src/assets/icon-dice.svg" alt="button" />
      </button>
    </Card>
  );
};

export default AdviceGenerator;
