import { Content } from '../models/Content.js'

class ContentRepository {
    async create(content, userId) {
        const contentModel = new Content({ user: userId, ...content});

        await contentModel.save();
    }

    async getAllContent(){
       return await Content.find();  
    }

    async findById(id){
        return await Content.findById(id);
    }
}

export { ContentRepository }; 