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
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
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
//////////////script///////////////
router.get("/index.js", (req, res) => {
  const filepath = path.join(__dirname, "../public/index.js");
  console.log(filepath);
  res.sendFile(filepath);
});

router.get("/index.css", (req, res) => {
  const filepath = path.join(__dirname, "../public/index.css");
  console.log(filepath);
  res.sendFile(filepath);
});

router.get("/workout.js", (req, res) => {
  const filepath = path.join(__dirname, "../public/workout.js");
  console.log(filepath);
  res.sendFile(filepath);
});

router.get("/stats.js", (req, res) => {
  const filepath = path.join(__dirname, "../public/stats.js");
  console.log(filepath);
  res.sendFile(filepath);
});

module.exports = router;
