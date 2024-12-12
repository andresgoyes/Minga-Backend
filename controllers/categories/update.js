import Category from "../../models/Category.js";

let updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoryData = req.body;
        let updatedCategory = await Category.findByIdAndUpdate(id, categoryData, {
            new: true, 
            runValidators: true, 
        });

        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Category updated successfully.",
            response: updatedCategory,
        });
    } catch (error) {
        next(error);
    }
};

export { updateCategory };