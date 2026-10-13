import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
 
// Same signature as the old SMTP version, so contactController.js needs no changes.
const resend = new Resend(process.env.RESEND_API_KEY);
 
const FROM = process.env.EMAIL_FROM || "Daisy Hills <care@daisyhillshomecare.com>";
const REPLY_TO = process.env.EMAIL_REPLY_TO || "care@daisyhillshomecare.com";
 
export default async function sendEmail({ to, subject, text }) {
  // The Resend SDK returns { data, error } instead of throwing
  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    replyTo: REPLY_TO,
    subject,
    text,
  });
 
  if (error) {
    // Rethrow so the controller's try/catch logs it, like before
    throw new Error(`${error.name || "ResendError"}: ${error.message}`);
  }
 
  console.log(`Email sent to ${to}. ID: ${data.id}`);
  return data;
}