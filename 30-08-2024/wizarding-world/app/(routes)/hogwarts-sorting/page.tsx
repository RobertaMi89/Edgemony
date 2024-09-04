"use client";

import { useState, useEffect } from "react";
import { IQuiz, IQuestion, IAnswer } from "@/app/(models)/Quiz";

// Funzione per recuperare il quiz
async function fetchQuiz(): Promise<IQuiz | null> {
  try {
    const response = await fetch("http://localhost:3000/api/quiz");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.quiz[0]; // Supponendo che tu voglia solo il primo quiz
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return null;
  }
}

const Sorting: React.FC = () => {
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetchQuiz().then(setQuiz);
  }, []);

  const handleAnswer = (
    questionIndex: number,
    house: string,
    points: number
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [house]: (prev[house] || 0) + points,
    }));

    // Passa alla prossima domanda
    if (questionIndex < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const calculateHouse = (): string => {
    if (!quiz) return "";

    const houses = quiz.results.map((result) => ({
      house: result.house,
      score: answers[result.house] || 0,
    }));

    houses.sort((a, b) => b.score - a.score);
    return houses[0].house;
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const currentQuestion: IQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{quiz.title}</h1>
      <p className="mb-4">{quiz.description}</p>
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
          <ul className="list-disc pl-5">
            {currentQuestion.answers.map(
              (answer: IAnswer, ansIndex: number) => {
                const house = Object.keys(answer.points)[0];
                const points = Object.values(answer.points)[0];

                return (
                  <li key={ansIndex}>
                    <button
                      onClick={() =>
                        handleAnswer(currentQuestionIndex, house, points)
                      }
                      className="text-blue-500 hover:underline"
                    >
                      {answer.text}
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        {currentQuestionIndex === quiz.questions.length - 1 &&
          Object.keys(answers).length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">La tua casa è:</h2>
              <p className="text-2xl font-bold">{calculateHouse()}</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Sorting;
