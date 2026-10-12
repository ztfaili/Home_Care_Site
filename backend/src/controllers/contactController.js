import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { sendText } from "../utils/sms.js";
import sendEmail from "../utils/sendEmail.js"

export const getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find({}); 
        return res.status(200).json({ success: true, data: messages }); 
    } catch (error) {
        console.error("Error in fetching messages:", error.message);
        return res.status(500).json({ success: false, message: "Server Error" }); 
    }
};

// Helper utility function to create an absolute pause between execution blocks
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const createContact = async (req, res) => {
    const contactInfo = req.body; 

    if(!contactInfo.fname || !contactInfo.lname || !contactInfo.email || !contactInfo.phone || !contactInfo.type || !contactInfo.message) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newContact = new Contact(contactInfo);

    try {
        // Save data to MongoDB first
        await newContact.save();

        // Send the staff notification email first
        // (If the patient email address happens to be fake, your staff still safely gets the alert)
        try {
            await sendEmail({
                to: "care@daisyhillshomecare.com",
                subject: `Alert: New Website Inquiry from ${contactInfo.fname} ${contactInfo.lname}`, 
                text: `
SYSTEM ALERT: New Website Form Submission

From: ${contactInfo.fname} ${contactInfo.lname}
Phone: ${contactInfo.phone}
Email: ${contactInfo.email}
Inquiry Type: ${contactInfo.type}

Message:
"${contactInfo.message}"
                `.trim(),
            });
        } catch (staffEmailError) {
            console.error("Internal Staff Alert Email failed to send:", staffEmailError.message);
        }

        // Pause completely for 1.5 seconds.
        // This gives the mail server plenty of time to fully tear down the previous socket connection.
        await delay(1500);

        // Send the patient confirmation email over a completely fresh socket channel
        try {
            await sendEmail({
                to: contactInfo.email,
                subject: "Daisy Hills Home Care",
                text: `
Hi ${contactInfo.fname} ${contactInfo.lname},

Thank you for choosing Daisy Hills Home Care services!

We have received your message and will be in touch with you shortly regarding your request.

If you have any questions, just reply to this email or call us.

Warm regards,  
DaisyHills Home Care
(262) 469-9609
                `.trim(),
            });
        } catch (patientEmailError) {
            console.error("Patient Confirmation Email failed to send:", patientEmailError.message);
        }

        // 5. Send successful HTTP response to client frontend
        return res.status(201).json({ success: true, data: newContact }); 

    } catch (error) {
        console.error("Error in creating contact handler:", error.message);
        return res.status(500).json({ success: false, message: "Server encountered an issue creating submission." }); 
    }
};