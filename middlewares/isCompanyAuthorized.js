import Company from "../models/Company.js";

export default async (req, res, next) => {
  try {
    const companyId = req.params.id;
    const userId = req.user.id;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    if (company.user_id.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to perform this action",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};