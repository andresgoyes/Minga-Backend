import Comment from "../../models/Comment.js";

let updateComment = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const { message } = req.body;

        const commentToUpdate = await Comment.findById(id);

        if (!commentToUpdate) {
            return res.status(404).json({
                success: false,
                message: "Comment not found.",
            });
        }

        commentToUpdate.message = message || commentToUpdate.message;
        await commentToUpdate.save();

        return res.status(200).json({
            success: true,
            message: "Comment updated successfully.",
            response: commentToUpdate,
        });
    } catch (error) {
        next(error);
    }
};

export { updateComment };