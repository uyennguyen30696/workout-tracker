const db = require("../models");

module.exports = function(app) {

    // Get last workout
    // Used by api.js
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbLastWorkout => {
            res.json(dbLastWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // Save new workout into "workouts" database
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(dbNewWorkout => {
            res.json(dbNewWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // Add exercise to a workout
    // Used by api.js
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({_id: req.params.id}, { $push: { exercises: req.body} }, { new: true, runValidators: true })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // Get workout history for chart dispaly
    // Used by api.js
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });
};
