import Category from "../../models/Category.js";

let deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Category deleted successfully.",
            response: deletedCategory,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteCategory };