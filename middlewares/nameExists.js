import Author from "../models/Author.js";

export default async (req, res, next) => {
  try {
    const { name, last_name } = req.body;
    const authorId = req.params.id;

    const existingAuthor = await Author.findOne({ 
      name, 
      last_name,
      _id: { $ne: authorId } 
    });

    if (existingAuthor) {
      return res.status(400).json({
        success: false,
        message: `An author with the name ${name} and last name ${last_name} already exists.`,
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};