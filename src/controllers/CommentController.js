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

            return response.status(201).send();                
        } catch(error) {
            return response.status(400).json({error: error.message});
        } 
    };

    async getAllComment(request, response){
        try { 
            const comments = await this.commentService.getAllComment(); 

            return response.status(200).json(comments);
        } catch(error) {
            return response.status(400).json({error: error.message});
        }
    }

    async findById(request, response){
        const id = request.parm;

        try { 
            const comment = await this.commentService.findById(id);

            return response.status(200).json(comment);
        } catch(error) {
            return response.status(400).json({error: error.message});
        }        
    }
}

export const commentController = new CommentController();