const express = require('express');
const authRouter = express.Router();
const bcrypt = require('bcrypt')
const User = require("../models/user.model")
const { generateToken } = require("../utils/utils")

const {
    signup,
    login
} = require("../controllers/auth.controller")


authRouter.post("/register", async (req, res) => {
    try {
        const { email, username, password, profilePictureUrl, nickname, phoneNumber, addresss } = req.body
        const userExists = await User.findOne({ username });

        if (userExists) {
            res.json({
                success: false,
                message: "Username already Exists."
            })
        } else {

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt);
            const registeredUser = await signup({
                email,
                username,
                password: hashedPassword,
                profilePictureUrl,
                nickname,
                phoneNumber,
                addresss
            })

            const token = generateToken(registeredUser._id)

            res.status(200).json({
                success: true,
                message: "Signup Succesfull",
                user: registeredUser,
                token: token
            })
        }

    } catch (error) {
        throw new Error(error)
    }
})



authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(401).json({
                success: false,
                message: 'Please Enter Email & Password'
            })
        }

        const userDetails = await login(email);


        if (!userDetails) {
            res.status({
                success: false,
                message: "Invalid email"
            })
        }

        const matchPassword = await bcrypt.compare(password, userDetails.password)

        if (!matchPassword) {
            res.status(401).json({
                success: false,
                message: "Invalid  password"
            })
        }

        const token = generateToken(userDetails._id)

        res.status(200).json({
            success: true,
            message: "Login Successful",
            user: userDetails,
            token: token
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})






module.exports = authRouter;