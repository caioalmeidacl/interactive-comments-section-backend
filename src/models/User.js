import { v4 as uuidV4 } from 'uuid';

class User { 
    id;
    username;
    email;
    password;
    created_at;
    profilePicture;

    constructor() {
        this.id = uuidV4();
    }
}

export { User }