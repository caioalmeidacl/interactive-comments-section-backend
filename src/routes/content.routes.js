import { Router } from "express";
import { contentController } from "../controllers/Content/index";

// checar token se existe

const contentRoutes = Router();

contentRoutes.get("/", (req, res) => {
    return contentController.list();
});

contentRoutes.get("/:id", (req, res) => {
    return contentController.findById(req, res);
});

contentRoutes.get("/:iduser", (req, res) => {
    return contentController.findAllByUser(req, res);
});

contentRoutes.post("/", (req, res) => {
    return contentController.create(req, res);
});
