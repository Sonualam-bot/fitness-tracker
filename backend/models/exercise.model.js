const mongoose = require('mongoose');



const exerciseSchema = new mongoose.Schema({
    exerciseName: String,
    durationMinutes: Number,
    caloriesBurned: Number,
    imageUrl: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

const exerciseCalorieRates = {
    'Running': {
        calorieRate: 7.5,
        imageUrl: 'https://fitpage.in/wp-content/uploads/2021/07/Article_Banner-1-40.jpg'
    },
    'Cycling': {
        calorieRate: 6.0,
        imageUrl: 'https://img.freepik.com/premium-vector/cyclist-edge_251819-1213.jpg'
    },
    'Swimming': {
        calorieRate: 8.0,
        imageUrl: 'https://img.freepik.com/free-vector/swimming-pool-hotel-resort-outdoors_33099-1697.jpg'
    },
    'Jumping Rope': {
        calorieRate: 10.0,
        imageUrl: 'https://img.freepik.com/free-photo/modern-gym-composition-with-sport-elements_23-2147913638.jpg'
    },
    'Yoga': {
        calorieRate: 3.5,
        imageUrl: 'https://media.istockphoto.com/id/1030547964/photo/yoga-bear.jpg?s=170667a&w=0&k=20&c=wkRDvvBoJul-ZboE8L3uqB4ELQYJgoTNKILM21dBqy4='
    },
    'Hiking': {
        calorieRate: 5.0,
        imageUrl: 'https://static01.nyt.com/images/2023/06/19/travel/19walking-gear-top/19walking-gear-top-articleLarge.jpg'
    },
    'Weightlifting': {
        calorieRate: 3.0,
        imageUrl: 'https://p1.pxfuel.com/preview/229/285/237/weight-lifting-fitness-exercise-muscle.jpg'
    },
    'Rowing': {
        calorieRate: 9.0,
        imageUrl: 'https://w7.pngwing.com/pngs/261/579/png-transparent-rowing-kayak-graphy-rowing-twins-cartoon-vehicle-sports.png'
    },
    'Boxing': {
        calorieRate: 12.0,
        imageUrl: 'https://img.freepik.com/free-photo/girl-kickboxer_654080-1885.jpg'
    },
    'Dancing': {
        calorieRate: 6.5,
        imageUrl: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/05/22/Pictures/_097b6b5a-5daf-11e8-8da7-089610bcbead.jpg'
    },
    'Climbing': {
        calorieRate: 7.0,
        imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/7XJarWOBU3cxNbPE12ngjQ/o.jpg'
    },
};

exerciseSchema.pre('save', function (next) {
    const calorieBurnRate = exerciseCalorieRates[this.exerciseName];

    if (!calorieBurnRate) {
        return next(new Error('Exercise not found or not supported'));
    }

    this.caloriesBurned = this.durationMinutes * calorieBurnRate.calorieRate;
    this.imageUrl = calorieBurnRate.imageUrl

    next();
});


const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
