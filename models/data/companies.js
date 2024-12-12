import "dotenv/config.js";
import '../../config/database.js';
import Company from '../Company.js';

const companies = [
    {
        name: "Anime Studios",
        website: "https://animestudios.com",
        description: "A renowned studio known for producing popular anime series.",
        photo: "https://robohash.org/animestudios.png",
        user_id: "6489f3c1f3a9b6e2b4567894",
        active: true
    },
    {
        name: "Manga Masters",
        website: "https://mangamasters.com",
        description: "A publishing company focused on creating iconic manga series.",
        photo: "https://robohash.org/mangamasters.png",
        user_id: "6489f3c1f3a9b6e2b4567895",
        active: true
    }
];

console.log(companies);

Company.insertMany(companies)
    .then(() => {
        console.log("Companies inserted successfully");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting companies: ", error);
        process.exit(1);
    });
