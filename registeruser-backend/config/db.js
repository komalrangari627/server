import mongoose from "mongoose";
export async function connectDB(uri){
  try{
    await mongoose.connect(uri);
    console.log("✅ registeruser MongoDB connected");
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}
