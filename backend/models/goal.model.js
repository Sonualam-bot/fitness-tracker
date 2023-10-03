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
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
