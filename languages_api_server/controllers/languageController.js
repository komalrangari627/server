import { languages } from "../data/languages.js";

// ✅ Get all languages
export const getLanguages = (req, res) => {
  res.json(languages);
};

// ✅ Get single language by ID
export const getLanguageById = (req, res) => {
  const id = parseInt(req.params.id);
  const language = languages.find((lang) => lang.id === id);

  if (!language) {
    return res.status(404).json({ message: "Language not found" });
  }

  res.json(language);
};

// ✅ Add new language
export const addLanguage = (req, res) => {
  const newLanguage = req.body;
  newLanguage.id = languages.length + 1;
  languages.push(newLanguage);
  res.status(201).json(newLanguage);
};
