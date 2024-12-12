import Company from "../../models/Company.js";

let updateCompany = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyData = req.body;
        let updatedCompany = await Company.findByIdAndUpdate(id, companyData, {
            new: true,
            runValidators: true,
        });

        if (!updatedCompany) {
            return res.status(404).json({
                success: false,
                message: "Company not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Company updated successfully.",
            response: updatedCompany,
        });
    } catch (error) {
        next(error);
    }
};

export { updateCompany };