import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!; // Ensure you add this in .env.local

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(MONGO_URI, {
      dbName: "portfolio_db",
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};
