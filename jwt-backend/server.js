import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req,res)=> res.send("jwt-backend running"));

(async()=>{
  await connectDB(process.env.MONGO_URI);
  app.listen(process.env.PORT || 4050, ()=> console.log("jwt-backend started"));
})();
