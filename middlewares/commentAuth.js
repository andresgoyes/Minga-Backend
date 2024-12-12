import Comment from "../models/Comment.js";
import Author from "../models/Author.js";
import Company from "../models/Company.js";

const commentAuth = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const { author_id, company_id } = comment;

    if (author_id) {
      const author = await Author.findById(author_id);
      if (!author || author.user_id.toString() !== req.user.id.toString()) {
        return res.status(403).json({ message: "You are not authorized to manage this comment" });
      }
    } else if (company_id) {
      const company = await Company.findById(company_id);
      if (!company || company.user_id.toString() !== req.user.id.toString()) {
        return res.status(403).json({ message: "You are not authorized to manage this comment" });
      }
    } else {
      return res.status(403).json({ message: "This comment is not associated with any author or company" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default commentAuth;