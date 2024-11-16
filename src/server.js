import express from "express";
import { router }  from "./routes/router.js";
import connectDB from "./database/database.js";

const app = express();

app.use(express.json());

connectDB();

app.use(router);

app.listen(process.env.PORT);