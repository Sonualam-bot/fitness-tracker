const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    imageUrl: String,
    calories: Number,
    proteinGrams: Number,
    carbohydratesGrams: Number,
    fatGrams: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

const foodNames = {
    'Oat Meal': {
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/oatmeal-recipes-1672950628.jpg'
    },
    'Nuts & Seeds': {
        imageUrl: 'https://humanwindow.com/wp-content/uploads/nuts-and-seeds-large.jpg'
    },
    'Salmon': {
        imageUrl: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2014/03/salmonWildVsFarmed-636216088-770x533-1.jpg'
    },
    'Avacado': {
        imageUrl: 'https://img.delicious.com.au/QUvIO4aR/w1200/del/2019/04/avocado-105965-2.jpg'
    },
    'Beans & Legumes': {
        imageUrl: 'https://www.mexicanist.com/content/images/2023/09/A-vibrant-medley-of-legumes-lentils-chickpeas-and-beans.jpg'
    },
    'Leafy Greens': {
        imageUrl: 'https://www.crossfit.com/wp-content/uploads/2021/07/14105156/GreenVegetables-istock-med-768x432.jpg'
    },
    'Muesli': {
        imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/World_Breakfast/Homemade_Stovetop_Granola_Recipe_using_Jaggery-1.jpg'
    },
    'Eggs': {
        imageUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/03/How-to-Boil-Eggs-main-1-2.jpg'
    },
}

foodItemSchema.pre('save', function (next) {
    const food = foodNames[this.foodName]

    if (!food) {
        return next(new Error('Food not found'))
    }

    this.imageUrl = food.imageUrl;
    next();
})


const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
