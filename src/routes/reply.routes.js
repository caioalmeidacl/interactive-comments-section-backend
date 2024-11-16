import { Router } from "express";
import { replyController } from "../controllers/ReplyController.js";
import { middleware } from "../middleware/Middleware.js";

const replyRoutes = Router();

replyRoutes.post("/", middleware, (req, res) => {
    return replyController.create(req, res);        
});

replyRoutes.get("/", middleware, (req, res) => {
    return replyController.getAll(req, res);
});

export { replyRoutes }