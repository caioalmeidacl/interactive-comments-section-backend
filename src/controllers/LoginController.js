import { AuthService } from "../services/Auth.js";
import { UserRepository } from "../repositories/UserRepository.js";

const auth = new AuthService(UserRepository);

class LoginController {
    async login(req, res) {
        const { username, password } = req.body;

        try {
            await auth.login(username, password);
            return res.status(200).send();
        } catch(error) {
            return res.status(400).json({message: error.message});
        }
    }
}


export const loginController = new LoginController();