import Comment from "../models/Comment.js";
import Author from "../models/Author.js";
import Company from "../models/Company.js";

export default async (req, res, next) => {
  try {
    const { message, chapter_id } = req.body;
    const userId = req.user.id;

    const author = await Author.findOne({ user_id: userId });
    const company = await Company.findOne({ user_id: userId });

    if (!author && !company) {
      return res.status(403).json({
        success: false,
        message: "You must be an author or part of a company to comment.",
      });
    }

    const filter = author
      ? { author_id: author._id }
      : { company_id: company._id };

    const existingComment = await Comment.findOne({
      ...filter,
      chapter_id,
      message,
    });

    if (existingComment) {
      return res.status(400).json({
        success: false,
        message: "You have already made a comment with the same content on this chapter.",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};