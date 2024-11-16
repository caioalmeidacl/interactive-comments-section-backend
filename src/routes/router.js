import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { contentRoutes } from "./content.routes.js";
import { loginRoutes } from "./login.routes.js";

const router = Router();

router.use("/login", loginRoutes)
router.use("/user", userRoutes);
router.use("/content", contentRoutes)

export { router };