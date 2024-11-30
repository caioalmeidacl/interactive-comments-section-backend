import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    }, 
    
    content: {
        type: String, 
        required: true
    },

    score:{ 
        type: Number, 
        default: 0
    },
    
    parentId: {
        type: String,
        default: null,
    }, 

    replies: 
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }, 
    ],

    createdAt: {
        type: Date, 
        default: Date.now,
        required: true,
    }
});


const Comment = mongoose.model("Comment", commentSchema);

export { Comment }