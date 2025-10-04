import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    serviceType: {
        type: [String],
        required: true
    },
    relationship: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
}, {
    timestamps: true // adds createdAt and updatedAt fields
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;