import Company from '../../models/Company.js';
import User from '../../models/User.js';

let create = async (req, res, next) => {
    try {
        let company = req.body;
        const userId = req.user.id;

        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        user.role = 2;
        await user.save();

        company.user_id = userId;

        let newCompany = await Company.create(company);

        return res.status(201).json({
            success: true,
            message: "Company created successfully.",
            response: newCompany
        });
    } catch (error) {
        next(error);
    }
};


let createMany = async (req, res, next) => {
    try {
        let companies = req.body;
        let allCompanies = await Company.insertMany(companies);

        return res.status(201).json({
            success: true,
            message: "Companies created successfully.",
            response: allCompanies,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };