import Chapter from '../../models/Chapter.js';

let deleteChapter = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedChapter = await Chapter.findByIdAndDelete(id);

        if (!deletedChapter) {
            return res.status(404).json({
                success: false,
                message: "Chapter not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Chapter deleted successfully.",
            response: deletedChapter,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteChapter };