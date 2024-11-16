import { UserRepository } from "../repositories/UserRepository.js";

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(user) {
        const existingUser = await this.userRepository.findByUsername(user.username);

        if (existingUser) throw new Error("Username already exists");

        await this.userRepository.create(user);
    }

    async getUsers(){ 
        return await this.userRepository.getUsers();
    }
}

export { UserService };