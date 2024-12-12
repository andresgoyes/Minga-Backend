import "dotenv/config.js";
import '../../config/database.js';
import Author from '../Author.js';

const authors = [
    {
        name: "Pedro",
        last_name: "Prieto",
        city: "Cali",
        country: "Colombia",
        date: new Date("1985-11-21"),
        photo: "https://robohash.org/pedroprieto.png",
        active: true,
        user_id: "6489f3c1f3a9b6e2b4567891"
    },
    {
        name: "Juan",
        last_name: "Vega",
        city: "Medellin",
        country: "Colombia",
        date: new Date("1990-06-07"),
        photo: "https://robohash.org/juanvega.png",
        active: true,
        user_id: "6489f3c1f3a9b6e2b4567892"
    },
    {
        name: "Miguel",
        last_name: "Mejia",
        city: "Bogota",
        country: "Colombia",
        date: new Date("1999-09-09"),
        photo: "https://robohash.org/miguelmejia.png",
        active: true,
        user_id: "6489f3c1f3a9b6e2b4567893"
    }

];

console.log(authors);

Author.insertMany(authors)
    .then(() => {
        console.log("Authors inserted successfully");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting authors: ", error);
        process.exit(1);
    });