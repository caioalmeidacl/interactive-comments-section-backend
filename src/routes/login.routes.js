import { Router } from "express";
import { loginController } from "../controllers/LoginController.js";
import { middleware } from "../middleware/Middleware.js";

const loginRoutes = Router();

loginRoutes.post("/", (req, res) => {
    return loginController.login(req, res);
});

loginRoutes.get("/me", middleware, (req, res) => {
    return loginController.getUserLogged(req, res);
});

export { loginRoutes }