import Company from "../../models/Company.js";
import User from "../../models/User.js";

const toggleCompany = async (req, res, next) => {
    try {
        const { id, active } = req.body;

        if (typeof active !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Invalid 'active' value. Must be true or false.",
            });
        }

        let company = await Company.findById(id);
        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }

        company = await Company.findByIdAndUpdate(
            id,
            { active },
            { new: true }
        );

        let user = await User.findById(company.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User associated with company not found.",
            });
        }

        user.is_active = active;

        await user.save();

        return res.status(200).json({
            success: true,
            message: `Company ${active ? "activated" : "deactivated"} successfully`,
            response: company,
        });
    } catch (error) {
        next(error);
    }
};

export default toggleCompany;