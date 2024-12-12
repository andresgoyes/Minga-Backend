import Author from "../../models/Author.js";

let allAuthors = async (req, res, next) => {
    try {
        let authors = await Author.find();

        if (authors.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Authors found successfully",
                response: {
                    authors
                }
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No authors found"
            });
        }
    } catch (error) {
        next(error);
    }
}

export { allAuthors };