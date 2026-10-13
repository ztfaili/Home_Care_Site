import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

// Created lazily so the server doesn't crash on startup if Twilio env vars are missing
let client = null;
const getClient = () => {
  if (!client) {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) return null;
    client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }
  return client;
};

export const sendText = async (message) => {
  const c = getClient();
  if (!c) {
    console.warn("Twilio not configured; skipping SMS.");
    return;
  }
  try {
    await c.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PHONE_NUMBER,
    });
    console.log("SMS sent successfully.");
  } catch (err) {
    console.error("Failed to send SMS:", err.message);
  }
};