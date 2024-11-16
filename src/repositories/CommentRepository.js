import { Comment } from '../models/Comment.js'

class CommentRepository {
    async create(comment, userId) {
        const commentModel = new Comment({ user: userId, ...comment});

        await commentModel.save();
    }

    async createReply({ userId, commentId, content }){
        const reply = new Comment({
            user: userId,
            content: content,
        });

        await reply.save();

        await Comment.findByIdAndUpdate(
            commentId,
            { $push: { replies: reply._id } },
            { new: true }
        );
    }

    async getAllComment(){
       return await Comment.find();  
    }

    async findById(id){
        return await Comment.findById(id);
    }

    async findReplyById(id) {
        return await Comment.findById(id).populate("replies");
    }
}

export { CommentRepository }; 