import mongoose from "mongoose";
import { Comment } from "../models/Comment.js";
import { User } from "../models/User.js";

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
    const commentModel = new Comment({ user: userId, ...comment });

    await commentModel.save();

    return commentModel;
  }
  z;

  async createReply({ userId, commentId, content }) {
    const reply = new Comment({
      user: userId,
      content: content,
      parentId: commentId,
    });

    await reply.save();

    await Comment.findByIdAndUpdate(
      commentId,
      { $push: { replies: reply._id } },
      { new: true },
    );

    return { parentId: reply.parentId, content };
  }

  async getAllComment() {
    return await Comment.find()
      .populate("user", "username profilePicture")
      .populate({
        path: "replies",
        select: "id user content score parentId",
        populate: { path: "user", select: "username profilePicture" },
      })
      .exec();
  }

  async findById(id) {
    return await Comment.findById(id);
  }

  async findReplyById(id) {
    return await Comment.findById(id).populate("replies");
  }

  async update({ userId, commentId, score, action }) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      if (action) {
        await User.findByIdAndUpdate(
          userId,
          { $addToSet: { likedComments: commentId } },
          { session, new: true },
        );
      } else {
        const user = await User.findById(userId);

        const likedCommentIds = user.likedComments.map((commentId) =>
          commentId.toString(),
        );

        const filteredLikedComments = likedCommentIds.filter(
          (id) => id !== commentId,
        );

        await User.updateOne(
          { _id: userId },
          { $set: { likedComments: filteredLikedComments } },
          { session },
        );
      }

      await Comment.findByIdAndUpdate(
        commentId,
        { $set: { score } },
        { session, new: true },
      );

      await session.commitTransaction();
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
    return score;
  }
}

export { CommentRepository };
