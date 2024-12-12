import Author from "../../models/Author.js";
import User from "../../models/User.js"; 

let deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        let deletedAuthor = await Author.findByIdAndDelete(id);

        if (!deletedAuthor) {
            return res.status(404).json({
                success: false,
                message: "Author not found.",
                response: null,
            });
        }

        let user = await User.findById(deletedAuthor.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User associated with author not found.",
                response: null,
            });
        }

        user.role = 0;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Author deleted and user role reset to 'User'.",
            response: deletedAuthor,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteAuthor };