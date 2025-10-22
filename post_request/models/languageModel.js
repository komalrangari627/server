import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  scope: {
    type: [String],
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  difficulties: {
    type: String,
    required: true
  }
});

export const Language = mongoose.model("Language", languageSchema);
