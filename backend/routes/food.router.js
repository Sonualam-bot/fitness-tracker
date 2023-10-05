const express = require('express');

const router = express.Router();

const {
    createFoodItem,
    getAllFoodItems,
    deleteFoodItem
} = require("../controllers/food.controller")

router.post("/food", async (req, res) => {
    try {
        const addnewFoodItem = await createFoodItem(req.body);
        if (!addnewFoodItem) {
            res.json({
                success: false,
                message: "Failed to add New Food Item"
            })
        }

        res.status(200).json({
            success: true,
            message: "Successfully created Food item",
            newFood: addnewFoodItem
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})


router.get("/food/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;

        const foodItems = await getAllFoodItems(userId);
        if (foodItems.length < 0) {
            res.json({
                success: false,
                message: "Food items not added yet",

            })
        }

        res.status(200).json({
            success: true,
            message: "Successfully fetched food items",
            foods: foodItems
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})

router.delete("/food/:foodId", async (req, res) => {
    try {
        const foodId = req.params.foodId;
        const removeFood = await deleteFoodItem(foodId);
        if (!removeFood) {
            res.json({
                success: false,
                message: "Failed to removed food item"
            })
        }


        res.status(200).json({
            success: true,
            message: "Successfully removed food item",
            deletedFoodItem: removeFood
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router