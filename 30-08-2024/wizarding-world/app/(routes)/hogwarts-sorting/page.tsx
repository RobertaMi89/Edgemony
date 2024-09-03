import { IQuiz } from "@/app/(models)/Quiz";

async function Sorting() {
  const response: { quiz: IQuiz[] } = await fetch(
    "http://localhost:3000/api/quiz"
  ).then((res) => res.json());
  return <div>{JSON.stringify(response.quiz[0])}</div>;
}

export default Sorting;
