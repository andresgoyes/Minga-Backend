import Company from "../models/Company.js";

export default async (req, res, next) => {
  try {
    const { name } = req.body;
    const companyId = req.params.id;

    const existingCompany = await Company.findOne({ 
      name,
      _id: { $ne: companyId } 
    });

    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: `A company with the name ${name} already exists.`,
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};