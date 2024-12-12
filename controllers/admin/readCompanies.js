import Company from "../../models/Company.js";

let allCompanies = async (req, res, next) => {
    try {
        let companies = await Company.find();

        if (companies.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Companies found successfully",
                response: {
                    companies
                }
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No companies found"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allCompanies };
