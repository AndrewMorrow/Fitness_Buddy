const Workout = require("../models/Workout");

const router = require("express").Router();

// route: /api/workouts
router.get("/workouts", async (req, res) => {
    try {
        const dbWorkoutData = await Workout.find();
        // console.log({ dbWorkoutData });
        res.status(200).json(dbWorkoutData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Needs to query to get last workout?
router.get("/excercise", async (req, res) => {
    try {
        const dbWorkoutData = await Workout.find();
        // console.log({ dbWorkoutData });
        res.status(200).json(dbWorkoutData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/workouts", async (req, res) => {
    try {
        // console.log(req.body);
        const workout = await new Workout(req.body);
        await workout.save();
        // console.log({ workout });
        res.status(200).json({
            message: "Created new Workout",
            createdWorkout: workout,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put("/workouts/:id", async (req, res) => {
    try {
        console.log(req.body);
        const id = req.params.id;
        const updateWorkout = await Workout.updateOne(
            { _id: id },
            { $push: { exercises: req.body } }
        );
        res.status(200).json({
            message: "Updated your workout",
            updatedWorkout: updateWorkout,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;