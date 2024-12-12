import "dotenv/config.js";
import '../../config/database.js';
import User from '../User.js';
import mongoose from "mongoose";

const users = [
    {
        _id: new mongoose.Types.ObjectId("6489f3c1f3a9b6e2b4567890"),
        email: "mailgoyes@gmail.com",
        password: "12345678",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        role: 0,
        online: false,
    },
    {
        _id: new mongoose.Types.ObjectId("6489f3c1f3a9b6e2b4567891"),
        email: "authorpedro@gmail.com",
        password: "12345678",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        role: 1,
        online: false,
    },
    {
        _id: new mongoose.Types.ObjectId("6489f3c1f3a9b6e2b4567892"),
        email: "authorjuan@gmail.com",
        password: "12345678",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        role: 1,
        online: false,
    },
    {
        _id: new mongoose.Types.ObjectId("6489f3c1f3a9b6e2b4567893"),
        email: "authormiguel@gmail.com",
        password: "12345678",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        role: 1,
        online: false,
    },
    {
        _id: new mongoose.Types.ObjectId("6489f3c1f3a9b6e2b4567894"),
        email: "admin@animestudios.com",
        password: "12345678",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        role: 2,
        online: false,
    },
    {
        _id: new mongoose.Types.ObjectId("6489f3c1f3a9b6e2b4567895"),
        email: "master@mangamasters.com",
        password: "12345678",
        photo: "https://randomuser.me/api/portraits/men/6.jpg",
        role: 2,
        online: false,
    },
    {
        _id: new mongoose.Types.ObjectId("6489f3c1f3a9b6e2b4567896"),
        email: "admin@minga.com",
        password: "12345678",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        role: 3,
        online: false,
    },
];

console.log(users);

User.insertMany(users)
    .then(() => {
        console.log("Users inserted successfully");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting users: ", error);
        process.exit(1);
    });