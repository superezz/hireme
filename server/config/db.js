// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodbURL = process.env.MONGODB_URL;
    const projectName = "inqora";

    if (!mongodbURL) {
      throw new Error("MONGODB_URL environment variable is not set");
    }

    const cleanURL = mongodbURL.endsWith("/")
      ? mongodbURL.slice(0, -1)
      : mongodbURL;

    mongoose.connection.on("connected", () => {
      console.log("Database is connected successfully");
    });

    await mongoose.connect(`${cleanURL}/${projectName}`);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default connectDB;