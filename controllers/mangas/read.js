import Manga from "../../models/Manga.js";

let allMangas = async (req, res, next) => {
    try {
        let search = {};
        let page = parseInt(req.query.page) || 1;
        let limit = req.query.category_id || req.query.title ? 20 : 6;
        let skip = (page - 1) * limit;

        // Filtrar por categoría
        if (req.query.category_id) {
            search.category_id = { $in: req.query.category_id.split(',') };
        }

        // Filtrar por título
        if (req.query.title) {
            search.title = new RegExp(req.query.title.trim(), 'i');
        }

        // Filtrar por autor
        if (req.query.author_id) {
            search.author_id = req.query.author_id; // Asume que el autor se envía como un ID exacto
        }

        let mangas = await Manga.find(search)
            .select('title cover_photo _id')
            .populate('category_id', 'name _id')
            .sort({ title: 1 })
            .skip(skip)
            .limit(limit);

        if (mangas.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Mangas retrieved successfully.",
                response: mangas,
            });
        }
        return res.status(404).json({
            success: false,
            message: "Mangas not found.",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while retrieving mangas.",
            error: error.message,
        });
    }
};

let mangaById = async (req, res, next) => {
    try {
        let mangaId = req.params.id;
        let manga = await Manga.findById(mangaId)
            .select('title cover_photo description -_id')            
            .populate('category_id', 'name -_id')
            .populate('company_id', 'name -_id')
            .populate('author_id', 'name -_id');
            

        if (manga) {
            let filteredManga = {
                ...manga.toObject(),
                author_id: manga.author_id || undefined,
                company_id: manga.company_id || undefined,
            };

            Object.keys(filteredManga).forEach(key => {
                if (filteredManga[key] === undefined) {
                    delete filteredManga[key];
                }
            });

            return res.status(200).json({
                success: true,
                message: "Manga found successfully",
                response: filteredManga,
            });
        } else {
            return res.status(404).json({
                response: "Manga not found with the specified ID",
            });
        }
    } catch (error) {
        next(error);
    }
};


let mangaByAuthorId = async (req, res, next) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: "Author ID is required.",
            });
        }

        let search = { author_id: req.params.id };
        let page = Math.max(parseInt(req.query.page) || 1, 1); // Página mínima 1
        let limit = req.query.category_id ? 10 : 6;
        let skip = (page - 1) * limit;

        if (req.query.category_id) {
            search.category_id = { $in: req.query.category_id.split(',') };
        }

        // Consulta a la base de datos
        let mangas = await Manga.find(search)
            .select('title cover_photo category_id author_id')
            .populate('author_id', 'name last_name _id')
            .populate('category_id', 'name -_id')
            .sort({ title: 1 })
            .skip(skip)
            .limit(limit);

        if (mangas.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Mangas by author retrieved successfully.",
                response: mangas,
            });
        }

        return res.status(404).json({
            success: false,
            message: "No mangas found for this author.",
        });

    } catch (error) {
        next(error);
    }
};

let mangaByCompanyId = async (req, res, next) => {
    try {
        let search = { company_id: req.params.id };
        let page = parseInt(req.query.page) || 1;
        let limit = req.query.category_id ? 10 : 6;
        let skip = (page - 1) * limit;

        if (req.query.category_id) {
            search.category_id = { $in: req.query.category_id.split(',') };
        }

        let mangas = await Manga.find(search)
            .select('title cover_photo category_id company_id')            
            .populate('company_id', 'name -_id')
            .populate('category_id', 'name -_id')
            .sort({ title: 1 })
            .skip(skip)
            .limit(limit);

        if (mangas.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Mangas by company retrieved successfully.",
                response: mangas,
            });
        }
        return res.status(404).json({
            success: false,
            message: "Mangas not found.",
        });

    } catch (error) {
        next(error); 
    }
};

export { allMangas, mangaById, mangaByAuthorId, mangaByCompanyId };