import Author from '../../models/Author.js';
import Company from '../../models/Company.js';
import Comment from '../../models/Comment.js';

let create = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { chapter_id, message } = req.body;

        const author = await Author.findOne({ user_id: userId });
        const company = await Company.findOne({ user_id: userId });

        const commentData = {
            chapter_id,
            message,
            author_id: author ? author._id : null,
            company_id: company ? company._id : null,
        };
        
        const newComment = await Comment.create(commentData);

        return res.status(201).json({
            success: true,
            message: "Comment created successfully.",
            response: newComment,
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let comments = req.body;
        let allComments = await Comment.insertMany(comments);

        return res.status(201).json({
            success: true,
            message: "Comments created successfully.",
            response: allComments,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };