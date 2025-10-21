import express from "express";
import { getHome, getServices, postContactForm } from "../controllers/controller.js";

const router = express.Router();

// GET Routes
router.get("/", getHome);
router.get("/services", getServices);

// POST Route
router.post("/contact", postContactForm);

export default router;
