import { ContentRepository } from "../repositories/ContentRepository.js";

class ContentService {
    constructor(){
        this.contentRepository = new ContentRepository();
    }
    
    async create(content, userId) {
        await this.contentRepository.create(content, userId);
    }

    async getAllContent(){
        return await this.contentRepository.getAllContent();
    }

    async findById(id){
        return await this.contentRepository.findById(id);
    }

    findAllByUser(id){
        return this.contentRepository.findAllByUser(id);
    }

    delete(id) {

    }
}

export { ContentService };