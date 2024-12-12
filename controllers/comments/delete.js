import Comment from "../../models/Comment.js";

let deleteComment = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedComment = await Comment.findByIdAndDelete(id);

        if (!deletedComment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Comment deleted successfully.",
            response: deletedComment,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteComment };