import { User } from "../registeruser_import.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

const createToken = (user, secret, expiresIn) => {
  return jwt.sign({ id: user._id, email: user.email, role: user.role }, secret, { expiresIn });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
    const token = createToken(user, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN || "1h");
    res.json({ message: "Login successful", token, user: { id: user._id, email: user.email, name: user.name }});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
