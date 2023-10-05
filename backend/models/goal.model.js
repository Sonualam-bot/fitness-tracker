const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    goalName: String,
    goalDescription: String,
    targetDate: Date,
    targetCaloriesValue: Number,
    status: {
        type: String,
        enum: ['In Progress', 'Achieved', 'Abandoned']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
