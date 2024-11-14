import { Router } from "express";
import { userController } from "../controllers/User/index";


// gerar token de usuario logado

const userRoutes = Router();

userRoutes.post("/", (req, res) => {
    return userController.create(req, res);
});
