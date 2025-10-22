import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.get("/", (req,res)=> res.send("registeruser-backend running"));

(async()=>{
  await connectDB(process.env.MONGO_URI);
  app.listen(process.env.PORT || 4000, ()=> console.log("registeruser-backend started"));
})();
