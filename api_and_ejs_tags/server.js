import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import router from "./routers/router.js";

dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS
app.set("view engine", "ejs");

// Routes
app.use(router);

// Server start
app.listen(port, () => {
  console.log(`✅ Server running on port ${port} → http://localhost:${port}`);
});
