import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { commentRoutes } from "./comment.routes.js";
import { loginRoutes } from "./login.routes.js";
import { replyRoutes } from "./reply.routes.js";

const router = Router();

router.use("/api/login", loginRoutes);
router.use("/api/user", userRoutes);
router.use("/api/comment", commentRoutes);
router.use("/api/reply", replyRoutes);

export { router };