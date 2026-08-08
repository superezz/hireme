import express from "express";
import { rateLimit } from 'express-rate-limit';
import {
  enhanceJobDescription,
  enhanceProfessionalSummary,
  uploadResume,
} from "../controllers/aiController.js";
import protect from "../middlewares/authMiddlewares.js";

const aiRouter = express.Router();

const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 AI requests per window
  message: { message: 'Too many AI requests from this IP, please try again later.' }
});

aiRouter.use(aiLimiter);

aiRouter.post("/enhance-pro-sum", protect, enhanceProfessionalSummary);
aiRouter.post("/enhance-job-desc", protect, enhanceJobDescription);
aiRouter.post('/upload-resume', protect, uploadResume);

export default aiRouter;