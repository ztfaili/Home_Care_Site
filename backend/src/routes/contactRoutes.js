import express from "express";
import { getAllMessages, createContact } from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getAllMessages);

router.post("/", createContact);

export default router;