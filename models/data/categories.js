import "dotenv/config.js";
import '../../config/database.js';
import Category from '../Category.js';

const categories = [
    {
        name: "Shonen",
        color: "#FF5733",
        hover: "#C70039",
        description: "Category that includes action, adventure, and fighting manga/comics, primarily targeted at young men.",
        cover_photo: "https://robohash.org/shonencover.png",
        character_photo: "https://robohash.org/naruto.png",
        admin_id: "6489f3c1f3a9b6e2b4567895",
    },
    {
        name: "Shojo",
        color: "#FFC0CB",
        hover: "#FF69B4",
        description: "Category that includes romantic and emotional manga/comics, with stories focused on personal relationships.",
        cover_photo: "https://robohash.org/shojocover.png",
        character_photo: "https://robohash.org/sailormoon.png",
        admin_id: "6489f3c1f3a9b6e2b4567895",
    },
    {
        name: "Seinen",
        color: "#2F4F4F",
        hover: "#1C1C1C",
        description: "Category targeted at adult men, with deeper and more complex themes involving drama, politics, or philosophy.",
        cover_photo: "https://robohash.org/seinencover.png",
        character_photo: "https://robohash.org/berserk.png",
        admin_id: "6489f3c1f3a9b6e2b4567895",
    },
    {
        name: "Josei",
        color: "#9370DB",
        hover: "#8A2BE2",
        description: "Category for adult women’s manga/comics, with romantic and deep stories focused on mature relationships.",
        cover_photo: "https://robohash.org/joseicover.png",
        character_photo: "https://robohash.org/nana.png",
        admin_id: "6489f3c1f3a9b6e2b4567895",
    },
    {
        name: "Comics",
        color: "#FF5733",
        hover: "#C70039",
        description: "A collection of comic books from various genres, with colorful illustrations and diverse themes, ranging from superheroes to slice-of-life.",
        cover_photo: "https://robohash.org/comicscover.png",
        character_photo: "https://robohash.org/comiccharacter.png",
        admin_id: "6489f3c1f3a9b6e2b4567895",
    }
];

console.log(categories);

Category.insertMany(categories)
    .then(() => {
        console.log("Categories inserted successfully");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting categories: ", error);
        process.exit(1);
    });