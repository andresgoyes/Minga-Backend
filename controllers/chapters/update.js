import Chapter from '../../models/Chapter.js';

let updateChapter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chapterData = req.body;

        let updatedChapter = await Chapter.findByIdAndUpdate(id, chapterData, {
            new: true,
            runValidators: true,
        });

        if (!updatedChapter) {
            return res.status(404).json({
                success: false,
                message: "Chapter not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Chapter updated successfully.",
            response: updatedChapter,
        });
    } catch (error) {
        next(error);
    }
};

export { updateChapter };