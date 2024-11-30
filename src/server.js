import express from "express";
import cors from "cors";
import { router }  from "./routes/router.js";
import connectDB from "./database/database.js";

const app = express();

app.use(cors({origin: process.env.URL_FRONTEND}));
app.use(express.json());

connectDB();

app.use(router);

app.listen(process.env.PORT, () => console.log("server working"));