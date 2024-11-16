import { User } from "../models/User.js";

class UserRepository {

    async findByUsername(username) {
        return await User.findOne({ username });
    } 

    async getUsers(){
        return await User.find();
    }

    async create(userData) {
        const user = new User(userData);        
        
        await user.save();
    }
}

export { UserRepository }