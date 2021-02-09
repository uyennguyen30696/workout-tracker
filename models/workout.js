const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter type of exercise."
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of exercise."
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Enter duration of exercise in minutes."
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
