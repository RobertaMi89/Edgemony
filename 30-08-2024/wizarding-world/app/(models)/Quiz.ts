import mongoose, { Model, Schema } from "mongoose";

// Establishing the MongoDB connection
mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

// Defining the Quiz Schema
const quizSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: [Schema.Types.Mixed], required: true }, // Allows for an array of any type
    results: { type: [Schema.Types.Mixed], required: true }, // Allows for an array of any type
  },
  {
    collection: "QuizCollection",
  }
);

export interface IQuiz extends Document {
  title: string;
  description: string;
  questions: Array<any>; // You can define a more specific type if needed
  results: Array<any>; // You can define a more specific type if needed
}

// Check if the model already exists before defining it
const Quiz: Model<IQuiz> =
  mongoose.models.Quiz || mongoose.model<IQuiz>("Quiz", quizSchema);

export default Quiz;

// const questionsSchema = new Schema({
//     0:String,
//     1:String,
//     2:String,
//     3:String,
//     4:String,
//     5:String,
//     6:String,
//     7:String,
//     8:String,
//     9:String,
// })

// const resultsSchema = new Schema({
//     0:String,
//     1:String,
//     2:String,
//     3:String
// })
