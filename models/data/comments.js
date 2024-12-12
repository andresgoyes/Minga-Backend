import "dotenv/config.js";
import '../../config/database.js';
import Comment from '../Comment.js';

const comments = [
    {
        chapter_id: "674f69eb84c3db65086928c9",
        author_id: "67493603622fcc71c3ada778", 
        company_id: null,
        message: "This chapter was very interesting, especially the part about historical events.",
    },
    {
        chapter_id: "674f69eb84c3db65086928c9",
        author_id: "67493603622fcc71c3ada779", 
        company_id: null,
        message: "I really liked the narrative, although I would have preferred more details about the characters.",
    },
    {
        chapter_id: "674f69eb84c3db65086928c9",
        author_id: "67493603622fcc71c3ada77a",
        company_id: null,
        message: "This chapter seemed very technical and difficult to follow, but the information was valuable.",
    },
];


console.log(comments);

Comment.insertMany(comments)
    .then(() => {
        console.log("Comments inserted successfully");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting comments: ", error);
        process.exit(1);
    });