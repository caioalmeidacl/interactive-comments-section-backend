import { CommentService } from "../services/CommentService.js";
import jsonwebtoken from "jsonwebtoken";

class CommentController {
  constructor() {
    this.commentService = new CommentService();
  }

  async create(request, response) {
    try {
      const comment = request.body;
      const userId = request.user.id;

      await this.commentService.create(comment, userId);

      return response.status(201).json({ message: "Success" });
    } catch (error) {
      return response.status(400).json({ detail: error.message });
    }
  }

  async getAllComment(request, response) {
    try {
      const comments = await this.commentService.getAllComment();

      return response.status(200).json(comments);
    } catch (error) {
      return response.status(400).json({ detail: error.message });
    }
  }

  async findById(request, response) {
    const id = request.params;

    try {
      const comment = await this.commentService.findById(id);

      return response.status(200).json(comment);
    } catch (error) {
      return response.status(400).json({ detail: error.message });
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { score, hasLiked } = request.body;
    const token = request.header("Authorization")?.split(" ")[1];
    const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const userId = verified.id;

    try {
      const updated = await this.commentService.update({
        commentId: id,
        userId,
        score,
        hasLiked,
      });

      return response.status(200).json(updated);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ detail: error.message });
    }
  }
  async delete(request, response) {
    const { id } = request.params;

    try {
      await this.commentService.delete(id);

      return response.status(200).json({ detail: "success" });
    } catch (error) {
      console.log(error.message);
      return response.status(400).json({ detail: error.message });
    }
  }

  async updateComment(request, response) {
    const { id } = request.params;
    const { content } = request.body;

    try {
      const updatedComment = await this.commentService.updateComment(
        id,
        content,
      );

      return response.status(200).json(updatedComment);
    } catch (error) {
      console.log(error.message);
      return response.status(400).json({ detail: error.message });
    }
  }
}

export const commentController = new CommentController();
