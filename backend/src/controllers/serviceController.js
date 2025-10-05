import mongoose from "mongoose";
import Service from "../models/Service.js";
import stripe from './../config/stripe.js';
import sendEmail  from "../utils/sendEmail.js";

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

        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
            {
            price_data: {
                currency: "usd",
                product_data: {
                name: "Home Care Service Request",
                description: `Service requested by ${service.name}`,
                },
                unit_amount: 200, // money in cents
            },
            quantity: 1,
            },
        ],
        customer_email: service.email,
        success_url: `${process.env.FRONTEND_URL}/success`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        metadata: {
            serviceId: newService._id.toString(),
        },
    });

        await sendEmail({
            to: service.email,
            subject: "Complete Your Home Care Service Payment",
            text: `
                Hi ${service.name},

                Thank you for choosing our home care services!

                To complete your booking, please proceed with the payment using the secure link below:
                ${session.url}

                If you have any questions, just reply to this email.

                Warm regards,  
                DaisyHills Home Care
                    `.trim(),
        });

        return res.status(201).json({ success: true, data: newService}) // 201 means something was created successfully

    } catch (error) {
        console.error("Error in creating service request:", error.message);
        return res.status(500).json({ success: false, message: error.message }); // 500 means server error
    }
};