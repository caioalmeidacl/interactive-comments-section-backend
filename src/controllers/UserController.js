import jsonwebtoken from "jsonwebtoken";
import { UserService } from "../services/UserService.js";

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async create(request, response) {
    try {
      const user = request.body;
      await this.userService.create(user);

      return response.status(201).json("success");
    } catch (error) {
      console.log(error);
      return response.status(400).json({ detail: error.message });
    }
  }

  async getAllUsers(request, response) {
    try {
      const users = await this.userService.getUsers();

      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ detail: error.message });
    }
  }

  async getLikedComments(request, response) {
    try {
      const token = request.header("Authorization")?.split(" ")[1];
      const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);

      const userId = verified.id;

      const allLikedComments = await this.userService.findLikedComments(userId);

      return response.status(200).json(allLikedComments);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ detail: error.message });
    }
  }
}

export const userController = new UserController();
