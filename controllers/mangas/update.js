import Manga from "../../models/Manga.js";

let updateManga = async (req, res, next) => {
    try {
        const { id } = req.params;
        const mangaData = req.body;
        let updatedManga = await Manga.findByIdAndUpdate(id, mangaData, {
            new: true,
            runValidators: true,
        });

        if (!updatedManga) {
            return res.status(404).json({
                success: false,
                message: "Manga not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Manga updated successfully.",
            response: updatedManga,
        });
    } catch (error) {
        next(error);
    }
};

export { updateManga };