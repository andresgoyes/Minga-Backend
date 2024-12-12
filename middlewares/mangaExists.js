import Manga from "../models/Manga.js";

export default async (req, res, next) => {
  try {
    const { title } = req.body;
    const mangaId = req.params.id;

    const existingManga = await Manga.findOne({
      title,
      _id: { $ne: mangaId }
    });

    if (existingManga) {
      return res.status(400).json({
        success: false,
        message: `A manga with the title "${title}" already exists.`,
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};