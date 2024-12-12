import Author from '../../models/Author.js';
import User from "../../models/User.js";

let create = async (req, res, next) => {
    try {
        let author = req.body;
        const userId = req.user.id;

        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        user.role = 1;
        await user.save();

        author.user_id = userId;

        let newAuthor = await Author.create(author);

        return res.status(201).json({
            success: true,
            message: "Author created successfully.",
            response: newAuthor
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let authors = req.body;
        let allAuthors = await Author.insertMany(authors);

        return res.status(201).json({
            success: true,
            message: "Authors created successfully.",
            response: allAuthors,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };