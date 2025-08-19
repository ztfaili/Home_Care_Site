import mongoose from "mongoose";
import Review from "../models/Review.js";

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        return res.status(200).json({ success: true, data: reviews });
    } catch (error) {
        console.error("Error in fetching reviews:", error.message);
        return res.status(500).json({ success: false, message: "Server Error" }); // 500 means server error
    }
}

export const createReview = async (req, res) => {
    const review = req.body; // user will send this data

    if(!review.rating || !review.name || !review.content) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    
    const newReview = new Review(review);

    try {
        await newReview.save();
        return res.status(201).json({ success: true, data: newReview}) // 201 means something was created successfully
    } catch (error) {
        console.error("Error in creating review:", error.message);
        return res.status(500).json({ success: false, message: error.message }); // 500 means server error
    }
};