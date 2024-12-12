import Category from '../../models/Category.js';
import User from '../../models/User.js';

let create = async (req, res, next) => {
    try {
        const adminId = req.user.id;

        let user = await User.findById(adminId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Admin user not found.",
            });
        }

        let categoryData = req.body;
        categoryData.admin_id = adminId;

        let newCategory = await Category.create(categoryData);

        return res.status(201).json({
            success: true,
            message: "Category created successfully.",
            response: newCategory,
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let categories = req.body;
        let allCategories = await Category.insertMany(categories);

        return res.status(201).json({
            success: true,
            message: "Categories created successfully.",
            response: allCategories,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };