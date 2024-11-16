import express from "express";
import cors from "cors";
import { router }  from "./routes/router.js";
import connectDB from "./database/database.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use(router);

app.listen(process.env.PORT);