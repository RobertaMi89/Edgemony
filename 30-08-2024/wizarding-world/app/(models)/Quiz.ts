import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

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

const quizSchema = new Schema({
  title: String,
  description: String,
  questions:Array,
  results:Array
});



const Quiz =
  mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);

export default Quiz;