import { Router } from "express";
import { loginController } from "../controllers/LoginController.js";

const loginRoutes = Router();

loginRoutes.post("/", (req, res) => {
    return loginController.login(req, res);
});

export { loginRoutes }