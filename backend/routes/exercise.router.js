const express = require('express');

const router = express.Router();

const {
    createExercise,
    getAllExercises,
    deleteExercise
} = require("../controllers/exercise.controller")


router.post('/exercises', async (req, res) => {
    try {
        const exercise = await createExercise(req.body);

        if (!exercise) {
            res.json({
                success: false,
                message: "Failed to create Exercise"
            })
        }

        res.status(200).json({
            success: true,
            message: "Successfully created new exercise",
            exercise: exercise
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})




router.get('/exercises/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const exercise = await getAllExercises(userId);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all exercises',
            exercise: exercise
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})





router.delete('/exercises/:exerciseId', async (req, res) => {
    try {
        const exerciseId = req.params.exerciseId
        const updateAfterDelete = await deleteExercise(exerciseId)

        if (!updateAfterDelete) {
            res.json({
                success: false,
                message: 'Exercise deletion failed'
            })
        }

        res.status(200).json({
            success: true,
            status: 204,
            message: "Successfully deleted exercise",
            deletedExercise: updateAfterDelete
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router;