import Company from "../../models/Company.js";

let allCompanies = async (req, res, next) => {
    try {
        let all = await Company.find();

        return res.status(200).json({
            success: true,
            message: "Companies retrieved successfully",
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

let companyById = async (req, res, next) => {
    try {
        let companyId = req.params.id;
        let company = await Company.findById(companyId);

        if (company) {
            return res.status(200).json({
                success: true,
                message: "Company found successfully",
                response: company,
            });
        } else {
            return res.status(404).json({
                response: "Company not found with the specified ID",
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allCompanies, companyById };