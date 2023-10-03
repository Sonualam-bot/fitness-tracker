const Exercise = require('../models/exercise.model')

async function createExercise(exercise) {
    try {
        const { exerciseName, durationMinutes, caloriesBurned } = exercise
        const newExercise = await Exercise.create({
            exerciseName,
            durationMinutes
        })

        return newExercise
    } catch (error) {
        throw new Error('Invalid: creating account failed')
    }
}


async function getAllExercises() {
    try {
        const exercises = await Exercise.find({});
        return exercises
    } catch (error) {
        throw error
    }
}


async function deleteExercise(exerciseId) {
    try {
        const deleteExerciseById = await Exercise.findByIdAndDelete(exerciseId)
        return deleteExerciseById
    } catch (error) {
        throw error
    }
}


module.exports = {
    createExercise,
    getAllExercises,
    deleteExercise
}