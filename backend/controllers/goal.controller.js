const Goal = require("../models/goal.model")

async function createNewGoal(goal) {
    try {
        const { goalName,
            goalDescription,
            targetDate,
            targetCaloriesValue,
            status, user } = goal;

        const newGoal = await Goal.create({
            goalName,
            goalDescription,
            targetDate,
            targetCaloriesValue,
            status,
            userId: user
        })
        return newGoal
    } catch (error) {
        throw error
    }
}


async function getAllGoals(userId) {
    try {
        const allGoals = await Goal.find({ userId });
        return allGoals
    } catch (error) {
        throw error
    }
}


async function deleteGoals(goalId) {
    try {
        const deleteGoals = await Goal.findByIdAndDelete(goalId);
        return deleteGoals
    } catch (error) {
        throw error
    }
}


module.exports = {
    createNewGoal,
    getAllGoals,
    deleteGoals
}