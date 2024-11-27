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

router.post("/games", auth, POST_GAME);
router.get("/games", auth, GET_ALL_GAMES);
router.get("/games/:id", auth, GET_GAME_BY_ID);
router.delete("/games_delete", auth, DELETE_ALL_GAMES);
router.delete("/games/:id", auth, DELETE_GAME_BY_ID);


export default router;