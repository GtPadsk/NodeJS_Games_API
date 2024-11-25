import { v4 as uuidv4 } from "uuid";
import GameModel from "../model/game_model.js";

// let games = [];

const POST_GAME = async (req, res) => {
    try {
        const newGame = {
            id: uuidv4(),
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            steamRating: req.body.steamRating,
            userId: req.body.userId,
        };

        const isTitleExists = await GameModel.findOne({ title: newGame.title });
        if (isTitleExists) {
            return res.status(400).json({ message: "This Game already exists" });
        }

        const game = new GameModel(newGame);

        const response = await game.save();

        return res
            .status(201)
            .json({
                response: "Game was inserted successfully",
                game: response,
            });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                message: "Duplicate field error",
                details: err.keyValue,
            });
        }

        console.log(err);
        return res.status(500).json({ message: "Problems occured" });
    }

}

const GET_ALL_GAMES = async (req, res) => {
    try {
        const games = await GameModel.find({ userId: req.body.userId, });
        return res.status(200).json({ games: games });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Problems occured" });
    }
}

const GET_GAME_BY_ID = async (req, res) => {
    try {
        const game = await GameModel.findOne({ id: req.params.id });
        if (game.userId !== req.body.userId) {
            return res
                .status(403)
                .json({ message: "Access denied" });
        }

        if (!game) {
            return res
                .status(404)
                .json({ message: `no game found with this ID ${req.params.id}` });
        }

        if (game.userId !== req.body.userId) {
            return res.status(403).json({ message: "Access denied" });
        }

        return res.status(200).json({ game })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "we have some problems" });
    }
}

const DELETE_ALL_GAMES = async (req, res) => {
    try {
        const game = await GameModel.deleteMany();
        return res.status(200).json({ game: game });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const DELETE_GAME_BY_ID = async (req, res) => {
    try {
        const response = await GameModel.findOneAndDelete({ id: req.params.id });

        if (!response) {
            return res
                .status(404)
                .json({ message: `game with id: ${req.params.id} does not exist` });
        }

        return res.status(200).json({ response: "game was deleted", game: response });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Server Error" })
    }

};


export {
    POST_GAME,
    GET_ALL_GAMES,
    GET_GAME_BY_ID,
    DELETE_ALL_GAMES,
    DELETE_GAME_BY_ID,
}