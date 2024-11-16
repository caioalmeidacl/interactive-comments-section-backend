import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    }, 
    text: {
        type: String, 
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Content"
        }
    ],
    created_at: {
        type: Date, 
        default: Date.now,
    }
});


const Content = mongoose.model("Content", contentSchema);

export { Content }