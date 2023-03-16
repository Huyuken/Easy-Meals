const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    servings: {
        type: Number
    },
    readyInMinutes: {
        type: Number
    },
    ingredients: {
        type: [String]
    },
    instructions: {
        type: [String]
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;