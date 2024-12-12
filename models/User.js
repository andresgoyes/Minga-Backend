import { Schema, model } from "mongoose";

let collection = 'users';

let schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, default: 0 }, // 0: User, 1: Author, 2: Companie, 3: Admin
    online: { type: Boolean, required: true, default: true },
    is_active: { type: Boolean, required: true, default: true },    
}, {
    timestamps: true
});

let User = model(collection, schema);
export default User;