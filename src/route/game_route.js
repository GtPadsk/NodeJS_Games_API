import express from "express";
import auth from "../middleware/auth.js";

import {
    POST_GAME,
    GET_ALL_GAMES,
    GET_GAME_BY_ID,
    DELETE_ALL_GAMES,
    DELETE_GAME_BY_ID,
} from "../controller/game_controller.js";

const router = express.Router();

router.post("/game", auth, POST_GAME);
router.get("/game", auth, GET_ALL_GAMES);
router.get("/game/:id", auth, GET_GAME_BY_ID);
router.delete("/games_delete", auth, DELETE_ALL_GAMES);
router.delete("/game/:id", auth, DELETE_GAME_BY_ID);


export default router;