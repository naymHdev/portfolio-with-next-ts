import mongoose from "mongoose";

type TConnectionObject = {
  isConnected?: number;
};

const MONGO_URI = process.env.MONGO_URI!;

const connection: TConnectionObject = {};

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

export const connectDB = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

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
