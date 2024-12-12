import Author from '../../models/Author.js';
import Company from '../../models/Company.js';
import Reaction from '../../models/Reaction.js';

let like = async (req, res, next) => {
    try {
        const { mangaId } = req.params;
        const { reaction } = req.body;
        const user_id = req.user.id;        
        const author = await Author.findOne({ user_id });
        const company = await Company.findOne({ user_id });

       let existingReaction = await Reaction.findOne({ manga_id: mangaId, user_id });

        if (existingReaction) {            
            if (existingReaction.reaction === true) {
                existingReaction.reaction = false;  // Cambiar de "like" a "dislike"
            } else {
                existingReaction.reaction = true;   // Cambiar de "dislike" a "like"
            }

            existingReaction.author_id = author ? author._id : null;
            existingReaction.company_id = company ? company._id : null;

            let updatedReaction = await existingReaction.save();

            return res.status(200).json({
                success: true,
                message: "Reaction updated successfully.",
                response: updatedReaction,
            });
        } else {            
            // Si no existe una reacción, creamos una nueva con "like"
            const newReaction = new Reaction({
                manga_id: mangaId,
                user_id,
                reaction: true,  // "like" es true
                author_id: author ? author._id : null,
                company_id: company ? company._id : null,
            });

            let createdReaction = await newReaction.save();

            return res.status(201).json({
                success: true,
                message: "Reaction created successfully.",
                response: createdReaction,
            });
        }
    } catch (error) {
        next(error);
    }
};

export { like };