import Reaction from '../../models/Reaction.js';
import Author from '../../models/Author.js';
import Company from '../../models/Company.js';

let getUserFavorites = async (req, res, next) => {
    try {
        const userId = req.user.id;        
        const author = await Author.findOne({ user_id: userId });
        const company = await Company.findOne({ user_id: userId });
        
        const reactions = await Reaction.find({
            $or: [
                { author_id: author ? author._id : null },
                { company_id: company ? company._id : null },
                { user_id: userId }
            ],
            reaction: true
        }).populate("manga_id", "title cover_photo -_id");
        
        return res.status(200).json({
            success: true,
            message: "Mangas with positive reactions (likes) retrieved successfully.",
            response: reactions.map(reaction => reaction.manga_id),
        });
    } catch (error) {
        next(error);
    }
};

export { getUserFavorites };