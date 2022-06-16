const mongoose = require('mongoose');

const { Schema } = mongoose;

const goodSchema = new Schema({
  category: String,
  name: String,
  price: String,
})

const Good = mongoose.model('Good', goodSchema)

module.exports = Good;