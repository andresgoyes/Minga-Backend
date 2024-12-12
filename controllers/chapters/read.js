import Chapter from '../../models/Chapter.js';

let allChapters = async (req, res, next) => {
    try {
        let all = await Chapter.find();

        let formattedChapters = all.map(chapter => ({
            id: chapter._id,
            title: chapter.title,
            order: chapter.order,
            cover_photo: chapter.cover_photo,
            pages: chapter.pages,
        }));

        return res.status(200).json({
            success: true,
            message: "Chapters retrieved successfully.",
            response: formattedChapters,
        });
    } catch (error) {
        next(error);
    }
};

let chapterByMangaId = async (req, res, next) => {
    try {        
        let query = { manga_id: req.params.id };
        let pagination = { page: 1, limit: 4 };

        if (req.query.page) pagination.page = parseInt(req.query.page, 10);
        if (req.query.manga_id) query.manga_id = req.query.manga_id;
        if (req.query.limit) pagination.limit = parseInt(req.query.limit, 10);

        let chapters = await Chapter.find(query)
            .select('title cover_photo order')
            .skip((pagination.page - 1) * pagination.limit)
            .limit(pagination.limit);

        let count = await Chapter.countDocuments(query);

        if (count > 0) {
            return res.status(200).json({
                success: true,
                message: "Chapters retrieved successfully.",
                response: { chapters, count },
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Chapters not found",
            });
        }
    } catch (error) {
        next(error);
    }
};

let chapterById = async (req, res, next) => {
    try {    
        let chapter = await Chapter.findById(req.params.id)            
            .select('-__v -updatedAt -createdAt -_id')

        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: "Chapter not found",
            });
        }
        
        let nextChapter = await Chapter.findOne({
            manga_id: chapter.manga_id,
            order: chapter.order + 1,
        })

        let prevChapter = await Chapter.findOne({
            manga_id: chapter.manga_id,
            order: chapter.order - 1,
        })        

        let response = {
            chapter,
            next: nextChapter?._id,
            prev: prevChapter?._id,
        };

        return res.status(200).json({
            success: true,
            message: "Chapter retrieved successfully",
            response,
        });
    } catch (error) {
        next(error);
    }
};

export { allChapters, chapterByMangaId, chapterById };