import mongoose from "mongoose";
import Contact from "../models/Contact.js";

export const getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find({}); // fetch all products from the database
        return res.status(200).json({ success: true, data: messages }); // 200 means OK
    } catch (error) {
        console.error("Error in fetching products:", error.message);
        return res.status(500).json({ success: false, message: "Server Error" }); // 500 means server error
    }
};

export const createContact = async (req, res) => {
    const contactInfo = req.body; // user will send this data

    if(!contactInfo.name || !contactInfo.email || !contactInfo.phone || !contactInfo.message) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newContact = new Contact(contactInfo);

    try {
        await newContact.save();
        return res.status(201).json({ success: true, data: newContact}) // 201 means something was created successfully
    } catch (error) {
        console.error("Error in creating product:", error.message);
        return res.status(500).json({ success: false, message: error.message }); // 500 means server error
    }
};