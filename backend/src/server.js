import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Render sits behind a proxy; needed so rate limiting sees real client IPs
app.set("trust proxy", 1);

// Comma-separated list in env, e.g.
// CORS_ORIGINS=https://daisyhillshomecare.com,https://www.daisyhillshomecare.com
const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim());

app.use(express.json({ limit: "10kb" }));
app.use(
  cors({
    origin(origin, cb) {
      // no Origin header = curl/health checks/server-to-server
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      console.warn("Blocked by CORS:", origin);
      return cb(new Error("Not allowed by CORS"));
    },
  })
);

// Render health check
app.get("/health", (req, res) => res.status(200).send("ok"));

app.use("/api/contact", contactRoutes);

// Connect to the DB first, then start listening
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});