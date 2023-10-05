const Food = require("../models/food.model");

async function createFoodItem(foodItem) {
    try {
        const { foodName,
            calories,
            proteinGrams,
            carbohydratesGrams,
            fatGrams, user } = foodItem;

        const newFoodItem = await Food.create({
            foodName,
            calories,
            proteinGrams,
            carbohydratesGrams,
            fatGrams,
            userId: user
        })

        return newFoodItem
    } catch (error) {
        throw error
    }
}


async function getAllFoodItems(userId) {
    try {
        const foodItemsList = await Food.find({ userId })
        return foodItemsList
    } catch (error) {
        throw error
    }
}


async function deleteFoodItem(foodId) {
    try {
        const deleteItem = await Food.findByIdAndDelete(foodId);
        return deleteItem
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFoodItem,
    getAllFoodItems,
    deleteFoodItem
}