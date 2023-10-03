const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        vaildate: [isEmail, 'Please enter a valid email']
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Please enter a username'],
        maxLength: [30, 'Name cannot exceed 30 characters'],
        minLength: [5, 'Name can only contain more than 5 characters']
    },
    password: {
        type: String,
        required: [true, 'Please enter a  password']
    },
    profilePictureUrl: String,
    nickname: String,
    phoneNumber: Number,
    address: String
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User