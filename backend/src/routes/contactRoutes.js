import express from "express";
import crypto from "crypto";
import rateLimit from "express-rate-limit";
import { getAllMessages, createContact } from "../controllers/contactController.js";

const router = express.Router();

// Max 5 submissions per IP per 15 minutes (stops spam / email abuse)
const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many submissions. Please try again later." },
});

router.post("/", submitLimiter, createContact);

export default router;