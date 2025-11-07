import express from "express";
import fetch from "node-fetch";
const router = express.Router();

// Helper function to call Gemini API
const callGemini = async (prompt) => {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.GEMINI_API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );
  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated.";
};

// 📰 AI Blog Summarizer (title + description)
router.post("/blog-summary", async (req, res) => {
  try {
    const { title, description } = req.body;
    const prompt = `Summarize this blog post in 3-4 lines:\nTitle: ${title}\nDescription: ${description}`;
    const summary = await callGemini(prompt);
    res.json({ summary });
  } catch (error) {
    console.error("Blog summary error:", error);
    res.status(500).json({ error: "Failed to summarize blog" });
  }
});

// 🧠 Case Study AI Summary Generator
router.post("/case-summary", async (req, res) => {
  try {
    const { content } = req.body;
    const prompt = `Summarize the following case study into a concise professional summary (4–6 lines):\n${content}`;
    const summary = await callGemini(prompt);
    res.json({ summary });
  } catch (error) {
    console.error("Case study summary error:", error);
    res.status(500).json({ error: "Failed to summarize case study" });
  }
});

export default router;
