import express from "express";
import multer from "multer";
import path from "path";
import Application from "../models/Application.js";

const router = express.Router();

// Configure file upload (for resume)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/resumes"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}_${file.originalname.replace(/\s+/g, "_")}`)
});
const upload = multer({ storage });

// POST /api/careers/apply
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, number, coverLetter } = req.body;
    const resumePath = req.file ? req.file.path : null;

    const newApp = new Application({
      name,
      email,
      number,
      resume: resumePath,
      coverLetter
    });

    await newApp.save();
    res.status(201).json({ success: true, message: "Application submitted successfully!" });
  } catch (err) {
    console.error("Error saving application:", err);
    res.status(500).json({ success: false, error: "Failed to submit application" });
  }
});

export default router;
