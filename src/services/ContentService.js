class ContentService {
    constructor(contentRepository){
        this.contentRepository = contentRepository;
    }
    
    create(text) {
        return this.contentRepository.create(text);
    }

    list(){
        return this.contentRepository.list();
    }

    findById(id){
        return this.contentRepository.findById(id);
    }

    findAllByUser(id){
        return this.contentRepository.findAllByUser(id);
    }

    delete(id) {

    }
}

export { ContentService };