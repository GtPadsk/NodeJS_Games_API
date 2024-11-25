import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";


import userRouter from "./src/route/user.js";
import gameRouter from "./src/route/game_route.js";

const app = express();

app.use(express.json());

app.use(cors());


mongoose
    .connect(process.env.MONGO_CONNECTION)
    .then(() => console.log("Connected!"))
    .catch(() => {
        console.log("bad connection");
    });

app.use(userRouter);
app.use(gameRouter);

app.use((req, res) => {
    res.status(404).json({ response: "your endpoint does not exit" });
});

app.listen(process.env.PORT, () => {
    console.log(`App was started on port ${process.env.PORT}`);
});
