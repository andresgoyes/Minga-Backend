import Chapter from "../models/Chapter.js";
import Manga from "../models/Manga.js";
import Author from "../models/Author.js";
import Company from "../models/Company.js";

const chapterAuth = async (req, res, next) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }

    const manga = await Manga.findById(chapter.manga_id);
    if (!manga) {
      return res.status(404).json({ message: "Manga associated with this chapter not found" });
    }

    const { author_id, company_id } = manga;

    if (author_id) {
      const author = await Author.findById(author_id);
      if (!author || author.user_id.toString() !== req.user.id.toString()) {
        return res.status(403).json({ message: "You are not authorized to manage this chapter" });
      }
    } else if (company_id) {
      const company = await Company.findById(company_id);
      if (!company || company.user_id.toString() !== req.user.id.toString()) {
        return res.status(403).json({ message: "You are not authorized to manage this chapter" });
      }
    } else {
      return res.status(403).json({ message: "This manga is not associated with any author or company" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default chapterAuth;