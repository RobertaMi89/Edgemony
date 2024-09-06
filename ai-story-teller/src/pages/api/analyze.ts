import {
  GenerateContentCandidate,
  GoogleGenerativeAI,
} from "@google/generative-ai";
import type { NextApiRequest, NextApiResponse } from "next";

interface BodyI {
  prompt: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { prompt } = req.body as BodyI;

    if (!prompt) {
      return res.status(400).json({ ok: false, message: "Body mancante" });
    }

    try {
      if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
        const genAI = new GoogleGenerativeAI(
          process.env.NEXT_PUBLIC_GEMINI_KEY
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        console.log("Analysis Result:", result);

        const output = (
          result.response.candidates as GenerateContentCandidate[]
        )[0].content.parts[0].text;
        const analysis = formatAnalysis(output);

        if (analysis) {
          return res.status(200).json({ ok: true, message: analysis });
        } else {
          return res
            .status(500)
            .json({ ok: false, message: "Nessuna analisi generata" });
        }
      } else {
        return res.status(400).json({
          ok: false,
          message: "Errore nella generazione (key missing)",
        });
      }
    } catch (e) {
      return res
        .status(500)
        .json({ ok: false, message: "Errore interno del server" });
    }
  } else {
    return res.status(405).json({ ok: false, message: "Metodo non gestito" });
  }
}

//  l'analisi per includere esattamente 5 domande e risposte
function formatAnalysis(text: string): string {
  const lines = text.split("\n").filter((line) => line.trim().length > 0);
  const questionsAndAnswers = [];

  let isQuestion = true;
  let currentQuestion = "";
  let currentAnswer = "";

  for (const line of lines) {
    if (isQuestion) {
      currentQuestion = line;
      isQuestion = false;
    } else {
      currentAnswer = line;
      questionsAndAnswers.push({
        question: currentQuestion,
        answer: currentAnswer,
      });
      isQuestion = true;
    }
  }

  // Assicurati che ci siano esattamente 5 domande e risposte
  const fiveQuestionsAndAnswers = questionsAndAnswers.slice(0, 5);

  return fiveQuestionsAndAnswers
    .map(
      (qa, index) =>
        `${index + 1}. **${qa.question}**\n* **Risposta:** ${qa.answer}`
    )
    .join("\n\n");
}
