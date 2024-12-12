import Comment from "../../models/Comment.js";

let allComments = async (req, res, next) => {
    try {
        let all = await Comment.find();

        return res.status(200).json({
            success: true,
            message: "Comments retrieved successfully",
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

let commentById = async (req, res, next) => {
    try {
        let commentId = req.params.id;
        let comment = await Comment.findById(commentId);

        if (comment) {
            return res.status(200).json({
                success: true,
                message: 'Comment found successfully',
                response: comment,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: `No comment found with ID: ${commentId}`,
                response: null,
            });
        }
    } catch (error) {
        next(error);
    }
};

let commentByChapterId = async (req, res, next) => {
    try {
        let query = { chapter_id: req.params.id };
        let comments = await Comment.find(query);        

        if (comments.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Comments retrieved successfully.",
                response: comments,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No comments found in this chapter",
                response: null,
            });
        }        
    } catch (error) {
        next(error);
    }
};

export { allComments, commentById, commentByChapterId };