// not sure if we should worry about this at first
const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
