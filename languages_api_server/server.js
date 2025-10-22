import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import languageRoutes from "./routers/languageRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);

app.get("/", (req, res) => {
  res.send("🌐 Languages API is running...");
});

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
