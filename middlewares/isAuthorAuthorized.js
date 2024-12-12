import Author from "../models/Author.js";

export default async (req, res, next) => {
  try {
    const authorId = req.params.id;
    const userId = req.user.id;

    const author = await Author.findById(authorId);

    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    if (author.user_id.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to perform this action",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};