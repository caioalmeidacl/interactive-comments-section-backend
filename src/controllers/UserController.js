import { UserService } from "../services/UserService.js";

class UserController { 
    constructor(){
        this.userService = new UserService();
    }

    async create(request, response) {
        try{
            const user = request.body;
            await this.userService.create(user);
            
            return response.status(201).send();
        } catch(error) {
            response.status(400).json({error: error.message});
        }
    }

    async getAllUsers(request, response){
        try {
            const users = await this.userService.getUsers();

            return response.status(200).json(users);
        } catch(error) {
            response.status(400).json({error: error.message});
        }

    }
}


export const userController = new UserController();