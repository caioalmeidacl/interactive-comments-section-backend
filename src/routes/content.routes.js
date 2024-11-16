import { Router } from "express";
import { contentController } from "../controllers/ContentController.js";
import { middleware } from "../middleware/Middleware.js";

const contentRoutes = Router();

contentRoutes.get("/", middleware,(req, res) => {
    return contentController.getAllContent(req, res);
});

contentRoutes.get("/:id", middleware,(req, res) => {
    return contentController.findById(req, res);
});

contentRoutes.post("/", middleware, (req, res) => {
    return contentController.create(req, res);
});

export { contentRoutes }
