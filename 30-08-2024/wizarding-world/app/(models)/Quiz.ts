import mongoose, { Model, Schema, Document } from "mongoose";

// Definizione dell'interfaccia per le risposte
export interface IAnswer {
  text: string;
  points: { [house: string]: number };
}

// Definizione dell'interfaccia per le domande
export interface IQuestion {
  question: string;
  answers: IAnswer[];
}

// Definizione dell'interfaccia per i risultati
export interface IResult {
  house: string;
  description: string;
}

// Definizione dell'interfaccia per il quiz
export interface IQuiz extends Document {
  title: string;
  description: string;
  questions: IQuestion[];
  results: IResult[];
}

// Schemi Mongoose
const answerSchema = new Schema<IAnswer>({
  text: { type: String, required: true },
  points: { type: Map, of: Number, required: true },
});

const questionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  answers: { type: [answerSchema], required: true },
});

const resultSchema = new Schema<IResult>({
  house: { type: String, required: true },
  description: { type: String, required: true },
});

const quizSchema = new Schema<IQuiz>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
    results: { type: [resultSchema], required: true },
  },
  {
    collection: "QuizCollection",
  }
);

// Modello Mongoose
const Quiz: Model<IQuiz> =
  mongoose.models.Quiz || mongoose.model<IQuiz>("Quiz", quizSchema);

export default Quiz;

// Connessione a MongoDB
mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;
