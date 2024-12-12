import Chapter from '../../models/Chapter.js';

let create = async (req, res, next) => {
    try {
        let chapter = req.body;
        let newChapter = await Chapter.create(chapter);
        return res.status(201).json({
            success: true,
            message: "Chapter created successfully.",
            response: newChapter,
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let chapters = req.body;
        let allChapters = await Chapter.insertMany(chapters);

        return res.status(201).json({
            success: true,
            message: "Chapters created successfully.",
            response: allChapters,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };