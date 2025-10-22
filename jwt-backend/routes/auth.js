import express from "express";
import { login, me } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import { body } from "express-validator";

const router = express.Router();
router.post("/login", login);
router.get("/me", protect, me);
export default router;
