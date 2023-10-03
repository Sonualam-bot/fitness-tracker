const User = require("../models/user.model");

async function signup(userDetails) {
    try {
        const user = new User(userDetails);
        const newUser = await user.save()
        return newUser
    } catch (error) {
        throw error
    }
}


async function login(email) {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error
    }
}


module.exports = {
    signup,
    login
}