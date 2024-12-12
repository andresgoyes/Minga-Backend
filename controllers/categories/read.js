import Category from "../../models/Category.js";

let allCategories = async (req, res, next) => {
    try {
        let all = await Category.find().select('-admin_id');

        return res.status(200).json({
            success: true,
            message: "Categories retrieved successfully.",
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let categoryById = async (req, res, next) => {
    try {
        let categoryId = req.params.id;
        let category = await Category.findById(categoryId);

        if (category) {
            return res.status(200).json({
                success: true,
                message: "Category found successfully.",
                response: category,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Category not found with the specified ID.",
                response: null,
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allCategories, categoryById };