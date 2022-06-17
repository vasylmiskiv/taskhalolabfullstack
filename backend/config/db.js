import mongoose from "mongoose";

import dotenv from "dotenv";
import colors from "colors";

//connect to db
const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB".underline.green);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
