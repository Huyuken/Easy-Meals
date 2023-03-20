const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
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
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User' 
  }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
