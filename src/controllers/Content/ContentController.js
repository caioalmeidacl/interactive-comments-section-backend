class ContentController {
    constructor(contentService) {
        this.contentService = contentService;
    }
    
    create(request, reponse) {
        const { user, text } = request.body;

        this.contentService.create(user, text);

        return reponse.status(201).send();
    };

    list(){
        
    }

    findById(id){
        
    }

    findAllByUser(){}

    delete(request, reponse) {
        const { id } = request.parm

        this.contentService.delete(id);

        return reponse.status(200).send();
    };
}

export { ContentController }