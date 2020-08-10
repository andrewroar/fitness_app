const router = require("express").Router();
const Workout = require("../models/workout.js");
const db = require("../models");
const path = require("path");
const mongojs = require("mongojs");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

/////////////////////////////////////////////////////////////

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(typeof mongojs.ObjectId(req.params.id));

  console.log(req.body);

  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { exercises: [req.body] }
    //{ new: true }
  )
    .then((dbWorkout) => {
      console.log("api updated:");
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/", ({ body }, res) => {
  console.log("/api/workouts/ called");
  console.log("body:");
  console.log(body);
  Workout.create(body)
    .then((dbWorkout) => {
      console.log("api created:");
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
