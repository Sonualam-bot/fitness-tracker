const Exercise = require('../models/exercise.model')

async function createExercise(exercise) {
    try {
        const { exerciseName, durationMinutes, user } = exercise
        const newExercise = await Exercise.create({
            exerciseName,
            durationMinutes,
            userId: user
        })

        return newExercise
    } catch (error) {
        throw new Error('Invalid: creating account failed')
    }
}


async function getAllExercises(userId) {
    try {
        const exercises = await Exercise.find({ userId });
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