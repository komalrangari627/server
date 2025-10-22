import { Tech } from "../models/Tech.js";

// Get all techs
export const getTechs = async (req, res) => {
  try {
    const techs = await Tech.find();
    res.json(techs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single tech
export const getTech = async (req, res) => {
  try {
    const tech = await Tech.findById(req.params.id);
    if (!tech) return res.status(404).json({ error: "Tech not found" });
    res.json(tech);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create tech
export const createTech = async (req, res) => {
  try {
    const { name, scope, duration, difficulty } = req.body;
    const newTech = new Tech({ name, scope, duration, difficulty });
    await newTech.save();
    res.status(201).json(newTech);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update tech
export const updateTech = async (req, res) => {
  try {
    const updatedTech = await Tech.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTech) return res.status(404).json({ error: "Tech not found" });
    res.json(updatedTech);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete tech
export const deleteTech = async (req, res) => {
  try {
    const deletedTech = await Tech.findByIdAndDelete(req.params.id);
    if (!deletedTech) return res.status(404).json({ error: "Tech not found" });
    res.json({ message: "Tech deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
