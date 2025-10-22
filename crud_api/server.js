import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Root route works!");
});

app.use(cors());
app.use(express.json());

// TEST route
app.get("/test", (req, res) => {
  res.send("Server is running!");
});

// Import routes
import { router as techRoutes } from "./routes/techRoutes.js";
app.use("/api/techs", techRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
