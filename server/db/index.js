import mongoose from "mongoose";

export default async (_nitroApp) => {
  try {
    mongoose.set("strictQuery", true); // 嚴格模式
    await mongoose.connect("mongodb+srv://password@...mongodb.net/DBName");
    console.log("連接 MongoDB");
  } catch (e) {
    console.error("Error MongoDB");
  }
};
