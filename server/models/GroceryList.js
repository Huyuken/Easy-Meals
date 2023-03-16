// instead of Product this should be recipe
const mongoose = require('mongoose');

const { Schema } = mongoose;

const grocerySchema = new Schema({
    items: {
    type: [String]
    },
});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;