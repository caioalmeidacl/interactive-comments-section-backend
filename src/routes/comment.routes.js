import { Router } from "express";
import { commentController } from "../controllers/CommentController.js";
import { middleware } from "../middleware/Middleware.js";

const commentRoutes = Router();

commentRoutes.get("/", middleware, (req, res) => {
  return commentController.getAllComment(req, res);
});

commentRoutes.get("/:id", middleware, (req, res) => {
  return commentController.findById(req, res);
});

commentRoutes.post("/", middleware, (req, res) => {
  return commentController.create(req, res);
});

commentRoutes.patch("/:id", middleware, (req, res) => {
  return commentController.update(req, res);
});

commentRoutes.delete("/:id", middleware, (req, res) => {
  return commentController.delete(req, res);
});

commentRoutes.put("/:id", middleware, (req, res) => {
  return commentController.updateComment(req, res);
});

export { commentRoutes };
