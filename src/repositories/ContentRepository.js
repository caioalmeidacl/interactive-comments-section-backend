import { Content } from '../models/Content'

class ContentRepository {
    static INSTANCE;

    static getInstance() {
        if(!this.INSTANCE) this.INSTANCE = new ContentRepository();
        return this.INSTANCE;
    }

    create(text) {
        const content = new Content();

        Object.assign(content, {
            user,
            text,
            create_at: new Date()
        }); 

        // salvar no banco
    }

    list(){
        
    }

    findById(id){

    }

    findAllByUser(id){

    }

    delete(id) {

    } 
}

export { ContentRepository }; 