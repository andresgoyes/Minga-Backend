import { Schema, model } from "mongoose";

let collection = "authors";

let schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, default: "" },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date, default: null },
    photo: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    active: { type: Boolean, default: true },
},
    {
        timestamps: true,
    });

let Author = model(collection, schema);
export default Author;