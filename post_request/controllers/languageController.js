import { Language } from "../models/languageModel.js";

// ✅ GET all languages
export const getLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching languages", error: error.message });
  }
};

// ✅ POST create a new language
export const createLanguage = async (req, res) => {
  try {
    const language = new Language(req.body);
    const saved = await language.save();
    res.status(201).json({
      message: "Language added successfully",
      data: saved
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding language", error: error.message });
  }
};
