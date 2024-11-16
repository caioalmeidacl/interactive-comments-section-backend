import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import 'dotenv/config';

class AuthService {
    constructor(userRepository) {
        this.userRepository = new userRepository();
    }

    async login(username, password) {
        const user = await this.userRepository.findByUsername(username);
        
        if(!user) throw new Error("User not found!");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if(!isPasswordValid) throw new Error("Invalid password");

        const token = jsonwebtoken.sign(
            { id: user._id, username: user.username},
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        console.log(token);
        return { token, user };
    }   
}

export { AuthService };