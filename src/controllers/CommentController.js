import { CommentService } from "../services/CommentService.js";

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
            return response.status(400).json({ error: error.message });
        }
    };

    async getAllComment(request, response) {
        try {
            const comments = await this.commentService.getAllComment();

            return response.status(200).json(comments);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async findById(request, response) {
        const id = request.params;

        try {
            const comment = await this.commentService.findById(id);

            return response.status(200).json(comment);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async update(request, response) {
        const { id } = request.params;
        const { score } = request.body;

        try {
            const updated = await this.commentService.update(id, score);

            return response.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return response.status(400).json({ error: error.message });
        }
    }
}

export const commentController = new CommentController();
