import { CommentRepository } from "../repositories/CommentRepository.js";

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
  }

  async create(comment, userId) {
    await this.commentRepository.create(comment, userId);
  }

  async getAllComment() {
    return await this.commentRepository.getAllComment();
  }

  async findById(id) {
    return await this.commentRepository.findById(id);
  }

  async findAllByUser(id) {
    return await this.commentRepository.findAllByUser(id);
  }

  async update({ userId, commentId, score, action }) {
    return await this.commentRepository.update({
      userId,
      commentId,
      score,
      action,
    });
  }
}

export { CommentService };
