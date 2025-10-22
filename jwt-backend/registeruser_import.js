// This file re-exports User model from the registeruser-backend folder.
// It expects registeruser-backend to be at ../registeruser-backend relative to this jwt-backend folder.
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// require the model file by resolving relative path
const userModelPath = path.resolve(__dirname, "../registeruser-backend/models/User.js");
const imported = await import("file://" + userModelPath);
export const User = imported.User;
