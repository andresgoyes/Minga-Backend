import "dotenv/config.js";
import '../../config/database.js';
import Reaction from '../Reaction.js';

const reactions = [
    {
      manga_id: "67493636eeb55fe6d47863b5",  
      author_id: "67493603622fcc71c3ada778", 
      company_id: null,
      reaction: "like" // love, surprise
    },
    {
      manga_id: "67493637eeb55fe6d47863cf",  
      author_id: "67493603622fcc71c3ada779", 
      company_id: null,
      reaction: "dislike"
    }
  ];

  console.log(reactions);

  Reaction.insertMany(reactions)
      .then(() => {
          console.log("Reactions inserted successfully");
          process.exit();
      })
      .catch(error => {
          console.error("Error inserting reactions: ", error);
          process.exit(1);
      });