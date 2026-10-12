import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  // service: 'gmail',
  host: 'mailserver.businessidentity.llc',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export default async function sendEmail({ to, subject, text }) {
  try {
    const info = await transporter.sendMail({
      from: `"Daisy Hills" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    });
    console.log(`Email successfully sent to ${to}. ID: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`Nodemailer error sending to ${to}:`, error);
    throw error; // Rethrows to be caught by your controller's catch block
  }
}