import express from "express";
import dotenv from "dotenv";
import router from "./routers/router.js";

dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5003;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use(router);

// Start Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
