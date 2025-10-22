import express from "express";
import { User } from "../models/User.js";

const router = express.Router();

// POST /api/users/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" });
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "Email exists" });
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created", user: { id: user._id, name: user.name, email: user.email }});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
