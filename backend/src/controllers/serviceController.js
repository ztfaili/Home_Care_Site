import mongoose from "mongoose";
import Service from "../models/Service.js";

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find({});
        return res.status(200).json({ success: true, data: services });
    } catch (error) {
        console.error("Error in fetching service messages:", error.message);
        return res.status(500).json({ success: false, message: "Server Error" }); // 500 means server error
    }
}

export const createService = async (req, res) => {
    const service = req.body; // user will send this data

    if(!service.name || !service.email || !service.phone || !service.address || !service.serviceType || !service.relationship || !service.notes) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    
    const newService = new Service(service);

    try {
        await newService.save();
        return res.status(201).json({ success: true, data: newService}) // 201 means something was created successfully
    } catch (error) {
        console.error("Error in creating service request:", error.message);
        return res.status(500).json({ success: false, message: error.message }); // 500 means server error
    }
};