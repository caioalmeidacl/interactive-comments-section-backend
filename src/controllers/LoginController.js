import { AuthService } from "../services/Auth.js";
import { UserRepository } from "../repositories/UserRepository.js";

const auth = new AuthService(UserRepository);

class LoginController {
    async login(req, res) {
        const { username, password } = req.body;

        try {
            const { access_token } = await auth.login(username, password);
            return res.status(200).json({ access_token });
        } catch(error) {
            console.log(error);
            return res.status(403).json({message: error.message});
        }
    }

    async getUserLogged(req, res) {
        try {
            const { user } = await auth.getUserLogged(req);
        
            return res.status(200).json({ user });
        } catch(error) {
            res.status(400).json({message: error.message});
        }
    };
}


export const loginController = new LoginController();