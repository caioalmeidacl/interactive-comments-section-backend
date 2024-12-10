import { Router } from "express";
import { userController } from "../controllers/UserController.js";
import { middleware } from "../middleware/Middleware.js";

const userRoutes = Router();

userRoutes.post("/signup", (req, res) => {
    return userController.create(req, res);
});

userRoutes.get("/", middleware, (req, res) => {
    return userController.getAllUsers(req, res);
});

export { userRoutes };
