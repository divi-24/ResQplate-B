import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { MONGO_URL } from "../app.js";

const dbConnect = async () => {
  try {
    const dbConnect = await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // console.log(MONGO_URL);
    process.exit(1);
  }
};

export default dbConnect;
