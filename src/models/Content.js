import { v4 as uuidV4 } from "uuid";

class Content {
    id;
    user;
    text;
    created_at;
    
    constructor() {
        this.id = uuidV4();
    }
}

export { Content }