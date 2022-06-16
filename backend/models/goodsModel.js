import mongoose from "mongoose";

const goodSchema = new mongoose.Schema({
  category: String,
  name: String,
  price: String,
})

const Good = mongoose.model('Good', goodSchema)

export default Good;