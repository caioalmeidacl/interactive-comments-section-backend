import { UserRepository } from "../repositories/UserRepository.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(user) {
        const existingUser = await this.userRepository.findByUsername(user.username);
        const existingEmail = await this.userRepository.findByEmail(user.email);

        if (existingEmail) throw new Error('Email already exists');
        if (existingUser) throw new Error('Username already exists');

        await this.userRepository.create(user);
    }

    async getUsers() {
        return await this.userRepository.getUsers();
    }
}

export { UserService };
