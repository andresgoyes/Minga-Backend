import Category from "../models/Category.js";

export default async (req, res, next) => {
  try {
    const { name } = req.body;    

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: 'Category with this name already exists',
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};