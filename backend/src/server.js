import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import path from 'path'

import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// const __dirname = path.resolve();

app.use(express.json()); // middleware function; allows us to accept JSON data in the req.body as an object
app.use(cors({
  origin: 'http://localhost:5173' // allow requests from your frontend origin
}));
  
  app.use("/api/contact", contactRoutes);

// if(process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   })
// }

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});