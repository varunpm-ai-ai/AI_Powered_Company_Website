import express from "express";
const router = express.Router();

// GET /api/admin/analytics
router.get("/analytics", async (req, res) => {
  try {
    // Dummy analytics data — replace with real DB metrics later
    const analytics = {
      totalVisitors: 1200,
      totalProjects: 15,
      totalContacts: 42,
      avgResponseTime: "2.3s",
      aiPerformance: 95
    };
    res.json(analytics);
  } catch (err) {
    res.status(500).json({ error: "Failed to load analytics" });
  }
});

export default router;
