const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goodsSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  descr: { type: String, required: true },
  data: { type: Object, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('goods', goodsSchema);
