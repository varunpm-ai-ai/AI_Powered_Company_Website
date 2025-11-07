import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

app.use("/api/ai", aiRoutes);
app.use("/api/careers", careerRoutes);
app.use("/uploads", express.static("uploads"));

dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("AI-Powered Company Website Backend Running 🚀");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
