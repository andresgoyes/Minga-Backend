import Company from "../../models/Company.js";
import User from "../../models/User.js";

let deleteCompany = async (req, res, next) => {
    try {
        const { id } = req.params;

        let deletedCompany = await Company.findByIdAndDelete(id);

        if (!deletedCompany) {
            return res.status(404).json({
                success: false,
                message: "Company not found.",
                response: null,
            });
        }

        let user = await User.findById(deletedCompany.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User associated with company not found.",
                response: null,
            });
        }

        user.role = 0;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Company deleted and user role reset to 'User'.",
            response: deletedCompany,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteCompany };