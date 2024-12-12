import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";

let create = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const mangaData = req.body;
        
        let author = await Author.findOne({ user_id: userId });
        let company = await Company.findOne({ user_id: userId });

        if (!author && !company) {
            return res.status(403).json({
                success: false,
                message: "User must be an author nor part of a company.",
            });
        }

        if (author) {
            mangaData.author_id = author._id;
        } 
        if (company) {
            mangaData.company_id = company._id;
        }

        let newManga = await Manga.create(mangaData);

        return res.status(201).json({
            success: true,
            message: "Manga created successfully.",
            response: newManga,
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let mangas = req.body;
        let allMangas = await Manga.insertMany(mangas);

        return res.status(201).json({
            success: true,
            message: "Mangas created successfully.",
            response: allMangas,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };