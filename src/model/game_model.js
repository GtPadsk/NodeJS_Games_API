import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    steamRating: { type: String, required: true },
    userId: { type: String, required: true }
});

export default mongoose.model("Game", gameSchema);
