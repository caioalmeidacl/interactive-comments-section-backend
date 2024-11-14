import { UserRepository } from "../../repositories/UserRepository";
import { UserController } from "./UserController";
import { UserService } from "../../services/UserService";

const userRepository = UserRepository.getInstance();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };