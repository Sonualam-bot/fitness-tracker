const User = require("../models/user.model");


async function changePassword(userId, hashedPassword) {
    try {
        const loggedInUser = await User.findOne({ userId })
        if (loggedInUser) {
            loggedInUser.password = hashedPassword
            const updatedUser = await loggedInUser.save();
            return updatedUser;
        }
    } catch (error) {
        throw error
    }
}

async function updateProfilePicture(userId, newProfilePictureUrl) {
    try {
        const user = await User.findOne({ _id: userId })
        if (user) {
            user.profilePictureUrl = newProfilePictureUrl
            const updatedUser = await user.save();
            return updatedUser
        }
        return user;
    } catch (error) {
        throw error
    }
}


async function updateContactDetails(email, userDetails) {
    try {
        const user = await User.findOne({ email });
        if (user) {
            Object.assign(user, userDetails);
            const updatedUser = await user.save();
            return updatedUser
        } else {
            throw new Error("User not found")
        }
    } catch (error) {
        throw error
    }
}

async function getUser(userId) {
    try {
        const userLogger = User.findOne({ _id: userId })
        return userLogger
    } catch (error) {
        throw error
    }
}





module.exports = {
    changePassword,
    updateProfilePicture,
    updateContactDetails,
    getUser
}