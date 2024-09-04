"use client";
import { useState, useEffect } from "react";
import { IQuiz } from "@/app/(models)/Quiz";

// Funzione per recuperare il quiz
async function fetchQuiz(): Promise<IQuiz | null> {
  try {
    const response = await fetch("http://localhost:3000/api/quiz");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.quiz[0];
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return null;
  }
}

const Sorting: React.FC = () => {
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetchQuiz().then(setQuiz);
  }, []);

  // Funzione per gestire la selezione di una risposta
  const handleAnswer = (
    questionIndex: number,
    house: string,
    points: number
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [house]: (prev[house] || 0) + points,
    }));
  };

  // Funzione per calcolare la casa vincente
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{quiz.title}</h1>
      <p className="mb-4">{quiz.description}</p>
      <div className="space-y-4">
        {quiz.questions.map((question, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{question.question}</h2>
            <ul className="list-disc pl-5">
              {question.answers.map((answer, ansIndex) => (
                <li key={ansIndex}>
                  <button
                    onClick={() =>
                      handleAnswer(
                        index,
                        Object.keys(answer.points)[0],
                        Object.values(answer.points)[0]
                      )
                    }
                    className="text-blue-500 hover:underline"
                  >
                    {answer.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {Object.keys(answers).length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">La tua casa è:</h2>
          <p className="text-2xl font-bold">{calculateHouse()}</p>
        </div>
      )}
    </div>
  );
};

export default Sorting;
