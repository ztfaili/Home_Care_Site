import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json()); // middleware function; allows us to accept JSON data in the req.body as an object
app.use(cors({
  origin: 'http://localhost:5173' // allow requests from your frontend origin
}));
  
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});