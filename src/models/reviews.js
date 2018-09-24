const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  user: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model('reviews', reviewsSchema);
