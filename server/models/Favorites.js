// instead of Product this should be recipe
const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
