import express from "express";
import { getTechs, getTech, createTech, updateTech, deleteTech } from "../controllers/techController.js";

const router = express.Router();

router.get("/", getTechs);
router.get("/:id", getTech);
router.post("/", createTech);
router.put("/:id", updateTech);
router.delete("/:id", deleteTech);

export { router };
