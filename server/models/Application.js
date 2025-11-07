import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  resume: { type: String }, // path or URL to uploaded resume
  coverLetter: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Application", applicationSchema);
