import { CommentRepository } from "../repositories/CommentRepository.js";

class ReplyService {
    constructor(){
        this.commentRepository= new CommentRepository();
    }
    
    async createReply(reply){
        return await this.commentRepository.createReply(reply);
    }

    async findById(id){
        return await this.commentRepository.findReplyById(id);
    }
}

export { ReplyService };