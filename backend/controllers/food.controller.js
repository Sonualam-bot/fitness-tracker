const Food = require("../models/food.model");

async function createFoodItem(foodItem) {
    try {
        const { foodName,
            calories,
            proteinGrams,
            carbohydratesGrams,
            fatGrams, } = foodItem;

        const newFoodItem = await Food.create({
            foodName,
            calories,
            proteinGrams,
            carbohydratesGrams,
            fatGrams,
        })

        return newFoodItem
    } catch (error) {
        throw error
    }
}


async function getAllFoodItems() {
    try {
        const foodItemsList = await Food.find({})
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