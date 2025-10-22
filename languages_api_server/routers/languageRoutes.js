import express from "express";
import {
  getLanguages,
  getLanguageById,
  addLanguage,
} from "../controllers/languageController.js";

const router = express.Router();

router.get("/", getLanguages);
router.get("/:id", getLanguageById);
router.post("/", addLanguage);

export default router;
