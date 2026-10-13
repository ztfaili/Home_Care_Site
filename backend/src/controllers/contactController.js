import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const STAFF_EMAIL = process.env.STAFF_EMAIL || "care@daisyhillshomecare.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Runs in the background after the response has been sent
async function sendNotifications(c) {
  try {
    await sendEmail({
      to: STAFF_EMAIL,
      subject: `Alert: New Website Inquiry from ${c.fname} ${c.lname}`,
      text: `
SYSTEM ALERT: New Website Form Submission

From: ${c.fname} ${c.lname}
Phone: ${c.phone}
Email: ${c.email}
Inquiry Type: ${c.type}

Message:
"${c.message}"
      `.trim(),
    });
  } catch (err) {
    console.error("Staff alert email failed:", err.message);
  }

  await delay(1500); // keeps your original spacing between sends

  try {
    await sendEmail({
      to: c.email,
      subject: "Daisy Hills Home Care",
      text: `
Hi ${c.fname} ${c.lname},

Thank you for choosing Daisy Hills Home Care services!

We have received your message and will be in touch with you shortly regarding your request.

If you have any questions, just reply to this email or call us.

Warm regards,
DaisyHills Home Care
(262) 469-9609
      `.trim(),
    });
  } catch (err) {
    console.error("Patient confirmation email failed:", err.message);
  }
}

export const createContact = async (req, res) => {
  // Pick only the fields we expect, force strings, trim, cap lengths
  // Express 5: req.body is undefined when no JSON body was sent
  const body = req.body ?? {};
  const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const contactInfo = {
    fname: clean(body.fname, 80),
    lname: clean(body.lname, 80),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    type: clean(body.type, 80),
    message: clean(body.message, 3000),
  };

  if (Object.values(contactInfo).some((v) => !v)) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }
  if (!EMAIL_RE.test(contactInfo.email)) {
    return res.status(400).json({ success: false, message: "Please provide a valid email" });
  }

  try {
    const newContact = await Contact.create(contactInfo);

    // Respond right away; don't make the visitor wait on SMTP
    res.status(201).json({ success: true, data: { id: newContact._id } });

    sendNotifications(contactInfo).catch((err) =>
      console.error("Notification error:", err.message)
    );
  } catch (error) {
    console.error("Error creating contact:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server encountered an issue creating submission." });
  }
};