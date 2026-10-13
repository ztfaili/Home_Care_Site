import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const port = Number(process.env.SMTP_PORT || 465);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mailserver.businessidentity.llc",
  port,
  secure: port === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Fail fast instead of hanging if the port is blocked
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

export default async function sendEmail({ to, subject, text }) {
  const info = await transporter.sendMail({
    from: `"Daisy Hills" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
  console.log(`Email sent to ${to}. ID: ${info.messageId}`);
  return info;
}