const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaDate = new Date().setDate(new Date().getDate());

const WorkoutSchema = new Schema({
  day: { type: Date, default: schemaDate },
  exercises: { type: Array },
  //{
  //  type: String,
  //  name: String,
  //  duration: Number,
  //  weight: Number,
  //  reps: Number,
  //  sets: Number,
  //},
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
