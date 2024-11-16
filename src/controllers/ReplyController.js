import { ReplyService } from "../services/ReplyService.js";

class ReplyController {
    constructor(){
        this.replyService = new ReplyService();
    }

    async create(req, res){
        try {
            const userId = req.user.id;
            const { commentId, content } = req.body;
            
            await this.replyService.createReply({ userId, commentId, content });

            return res.status(201).send();
        } catch(error) {
            return res.status(400).json({message: error.message});
        }
    }
}

export const replyController = new ReplyController();