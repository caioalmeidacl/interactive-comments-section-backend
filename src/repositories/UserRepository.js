import User from "../models/User";

class UserRepository {
    static INSTANCE;
    
    static getInstance() {
        if(!this.INSTANCE) new UserRepository();
        return this.INSTANCE;
    }

    create(user) {
        const user = new User();        

        Object.assign(this.user, {
           user, 
           create_at: new Date(),            
        });
    }

    findByUsername(username) {
        ///

        return false;
    } 
}

export { UserRepository }