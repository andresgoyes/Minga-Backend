import Manga from "../../models/Manga.js";

let deleteManga = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedManga = await Manga.findByIdAndDelete(id);

        if (!deletedManga) {
            return res.status(404).json({
                success: false,
                message: "Manga not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Manga deleted successfully.",
            response: deletedManga,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteManga };