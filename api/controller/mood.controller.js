import MoodModel from "../model/mood.model.js";
import jwt from "jsonwebtoken";

export const addMood = async (req, res) => {
  try {
    const token = req.headers.authorization;

    console.log("TOKEN:", token); // 🔍
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, "secretkey");
    console.log("DECODED:", decoded); // 🔥

    const saved = await MoodModel.create({
      mood: req.body.mood,
      emoji: req.body.emoji,
      userId: decoded.userId,
    });

    res.json({ success: true, saved });

  } catch (err) {
    console.error("ADD MOOD ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
};



// Get all moods of user
export const getAllMoods = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, "secretkey");
    const userId = decoded.userId;

    const moods = await MoodModel.find({ userId }).sort({ createdAt: -1 });

    res.json({ success: true, moods });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllMoodsForAdmin = async (req, res) => {
  try {
    const moods = await MoodModel.find().sort({ createdAt: -1 });
    res.json({ success: true, moods });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


