import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { commentRoutes } from "./comment.routes.js";
import { loginRoutes } from "./login.routes.js";
import { replyRoutes } from "./reply.routes.js";

const router = Router();

router.use("/login", loginRoutes);
router.use("/user", userRoutes);
router.use("/comment", commentRoutes);
router.use("/reply", replyRoutes);

export { router };