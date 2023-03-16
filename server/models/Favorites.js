// instead of Product this should be recipe
const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  id: {
    type: Number,
  },
  ingredients: {
    type: [String]
  }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
