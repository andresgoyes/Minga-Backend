import Manga from "../models/Manga.js";
import Author from "../models/Author.js";
import Company from "../models/Company.js";

const mangaAuth = async (req, res, next) => {
  try {
    const manga = await Manga.findById(req.params.id);
    if (!manga) {
      return res.status(404).json({ message: "Manga not found" });
    }

    if (manga.author_id) {
      const author = await Author.findById(manga.author_id);
      if (!author || author.user_id.toString() !== req.user.id.toString()) {
        return res.status(403).json({ message: "You are not authorized to manage this manga" });
      }
    }

    if (manga.company_id) {
      const company = await Company.findById(manga.company_id);
      if (!company || company.user_id.toString() !== req.user.id.toString()) {
        return res.status(403).json({ message: "You are not authorized to manage this manga" });
      }
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default mangaAuth;