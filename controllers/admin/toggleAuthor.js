import Author from "../../models/Author.js";
import User from "../../models/User.js";

const toggleAuthor = async (req, res, next) => {
    try {
        const { id, active } = req.body;

        if (typeof active !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Invalid 'active' value. Must be true or false.",
            });
        }

        let author = await Author.findById(id);
        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found",
            });
        }

        author = await Author.findByIdAndUpdate(
            id,
            { active },
            { new: true }
        );

        let user = await User.findById(author.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User associated with author not found.",
            });
        }

        user.is_active = active;

        await user.save();

        return res.status(200).json({
            success: true,
            message: `Author ${active ? "activated" : "deactivated"} successfully`,
            response: author,
        });
    } catch (error) {
        next(error);
    }
};

export default toggleAuthor;