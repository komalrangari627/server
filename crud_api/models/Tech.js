import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scope: { type: String, required: true },
  duration: { type: String, required: true },
  difficulty: { type: String, required: true }
}, { timestamps: true });

export const Tech = mongoose.models.Tech || mongoose.model("Tech", techSchema);
