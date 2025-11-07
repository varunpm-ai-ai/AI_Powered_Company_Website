import express from "express";
import Contact from "../models/contact.js";
const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, message: "Message received!" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ success: false, error: "Failed to save contact" });
  }
});

export default router;
