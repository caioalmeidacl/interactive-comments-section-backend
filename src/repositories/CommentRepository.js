import { Comment } from '../models/Comment.js'

class CommentRepository {
    async create(comment, userId) {
        try {
            const commentModel = await this.createCommentModel(comment, userId);
    
            const { parentId, content, _id, score } = commentModel;
    
            return { parentId, content, _id: _id.toString(), score };
        } catch (e) {
            console.log(e);
        }
    }

    async createCommentModel(comment, userId) {
        const commentModel = new Comment({ user: userId, ...comment});
        
        await commentModel.save();        

        return commentModel;
    }z

    async createReply({ userId, commentId, content }){
        const reply = new Comment({
            user: userId,
            content: content,
            parentId: commentId,
        });

        await reply.save();

        await Comment.findByIdAndUpdate(
            commentId,
            { $push: { replies: reply._id } },
            { new: true }
        );

        return  { parentId: reply.parentId, content };
    }

    async getAllComment(){
       return await Comment.find()
        .populate("user", "username profilePicture")
        .populate({
            path: "replies", 
            select: "id user content score parentId",
            populate: { path: "user", select: "username profilePicture" }
        })
        .exec();  
    }

    async findById(id){
        return await Comment.findById(id);
    }

    async findReplyById(id) {
        return await Comment.findById(id).populate("replies");
    }

    async update(id, score) {
        return await Comment.findByIdAndUpdate(
            id, 
            { score },
            { new: true }
        );
    }
}

export { CommentRepository }; 