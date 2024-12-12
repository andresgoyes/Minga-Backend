import Author from "../../models/Author.js";

let updateAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const authorData = req.body;
        let updatedAuthor = await Author.findByIdAndUpdate(id, authorData, {
            new: true,
            runValidators: true,
        });

        if (!updatedAuthor) {
            return res.status(404).json({
                success: false,
                message: "Author not found.",
                response: null
            });
        }

        return res.status(200).json({
            success: true,
            message: "Author updated successfully.",
            response: updatedAuthor
        });
    } catch (error) {
        next(error);
    }
};

export { updateAuthor };