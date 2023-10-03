const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt')

const authVerify = require("../middlewares/authVerify")

const User = require("../models/user.model")

const {
    changePassword,
    updateProfilePicture,
    updateContactDetails,
    getUser

} = require("../controllers/user.controller")


userRouter.get("/userProfile", authVerify, async (req, res) => {
    try {
        const { userId } = req.user
        const user = await getUser(userId)
        res.status(200).json({
            success: true,
            message: "Successfully retrieved user",
            user: user
        })
    } catch (error) {
        throw error
    }
})


userRouter.post("/:userId/password", authVerify, async (req, res) => {
    try {

        const { userId } = req.user;


        const { currentPassword, newPassword } = req.body;

        const user = await User.findOne({ _id: userId })

        const passwordMatch = await bcrypt.compare(currentPassword, user.password)

        if (!passwordMatch) {
            res.status(401).json({
                success: false,
                error: "Invalid Password"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt)

        const updatedUser = await changePassword(hashedPassword);

        res.status(200).json({
            success: true,
            message: "Password changed successfully",
            user: updatedUser
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})



userRouter.post("/:userId/profile", authVerify, async (req, res) => {
    try {
        const { newProfilePictureUrl } = req.body;

        //from auth verify
        const { userId } = req.user;

        const getUser = await updateProfilePicture(userId, newProfilePictureUrl);

        res.status(200).json({
            success: true,
            message: "profile picture updated",
            user: getUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error,
            message: "user not found"
        })
    }
})


userRouter.post("/update-contact/:email", async (req, res) => {
    try {
        const email = req.params.email;

        if (!req.body.phoneNumber || !req.body.address) {
            res.json({
                success: false,
                message: "Provide phoneNumber and address to update"
            })
        }
        const user = await updateContactDetails(email, req.body);

        if (!user) {
            res.json({
                success: false,
                message: "Failed to update User contact details"
            })
        }

        res.json({
            success: true,
            message: "User contact details updated successfully",
            updatedUser: user
        })

    } catch (error) {
        throw error
    }
})



module.exports = userRouter