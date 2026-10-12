import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { sendText } from "../utils/sms.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        Contact.watch().on("change", async (change) => {
            if (change.operationType === "insert") {
                const newDoc = change.fullDocument;
                console.log("New contact inserted:", newDoc);

                // Send SMS here
                // await sendText(`New contact entry:\n${JSON.stringify(newDoc, null, 2)}`);
            }
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}