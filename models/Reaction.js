import { Schema, model } from "mongoose";

let collection = 'reactions';

let schema = new Schema({
    manga_id: { type: Schema.Types.ObjectId, ref: 'mangas', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    author_id: { type: Schema.Types.ObjectId, ref: 'authors', required: false },
    company_id: { type: Schema.Types.ObjectId, ref: 'companies', required: false },
    reaction: { type: Boolean, required: true }, // true = Like, false = Dislike
}, {
    timestamps: true
});

let Reaction = model(collection, schema);
export default Reaction;