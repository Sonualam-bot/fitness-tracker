const express = require("express");

const router = express.Router();

const {
    createNewGoal,
    getAllGoals,
    deleteGoals
} = require("../controllers/goal.controller")

router.post("/goals", async (req, res) => {
    try {
        const addGoal = await createNewGoal(req.body)

        if (!addGoal) {
            res.json({
                success: false,
                message: "Failed to add New Goal"
            })
        }

        res.status(200).json({
            success: true,
            message: "Successfully added a new goal",
            goal: addGoal
        })

    } catch (error) {
        res.json({
            success: false,
            status: 500,
            error: error.message
        })
    }
})

router.get("/goals", async (req, res) => {
    try {
        const goals = await getAllGoals();

        if (!goals) {
            res.json({
                success: false,
                message: "Goals Not added yet"
            })
        }

        if (goals.length > 0) {
            res.status(200).json({
                success: true,
                message: "Successfully retrieved goals",
                goals: goals
            })
        } else {
            res.json({
                success: false,
                message: "Goals Not added yet !!!"
            })
        }

    } catch (error) {
        res.json({
            success: false,
            status: 500,
            error: error.message
        })
    }
})


router.delete("/goals/:goalId", async (req, res) => {
    try {
        const goalId = req.params.goalId
        const removeGoal = await deleteGoals(goalId);
        if (!removeGoal) {
            res.json({
                success: false,
                message: "Failed to delete goal"
            })
        }

        res.status(200).json({
            success: true,
            message: "Successfully deleted Goal",
            delete: removeGoal
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})


module.exports = router