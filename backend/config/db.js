const mongoose = require('mongoose');

require('dotenv').config();
const colors = require('colors');

const URI = process.env.MONGO_URI;

//connect to db
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
    })
    console.log('Connected to MongoDB'.underline.green)
  } catch(error) {
    console.error(error)
  }
}

module.exports = {
  connectDB,
}