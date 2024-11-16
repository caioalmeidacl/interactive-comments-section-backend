import { ContentService } from "../services/ContentService.js";

class ContentController {
    constructor() {
        this.contentService = new ContentService();    
    }    

    async create(request, reponse) {
        try {
            const content = request.body;
            const userId = request.user.id;

            await this.contentService.create(content, userId);

            return reponse.status(201).send();                
        } catch(error) {
            response.status(400).json({error: error.message});
        } 
    };

    async getAllContent(request, response){
        try { 
            const contents = await this.contentService.getAllContent(); 

            return response.status(200).json(contents);
        } catch(error) {
            response.status(400).json({error: error.message});
        }
    }

    async findById(request, response){
        const id = request.parm;

        try { 
            const content = await this.contentService.findById(id);

            return response.status(200).json(content);
        } catch(error) {
            response.status(400).json({error: error.message});
        }        
    }
}

export const contentController = new ContentController();