import User from "../../models/User.js";

let updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        let updatedUser = await User.findByIdAndUpdate(id, userData, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
                response: null
            });
        }

        return res.status(200).json({
            success: true,
            message: "User updated successfully.",
            response: updatedUser
        });
    } catch (error) {
        next(error);
    }
};

export { updateUser };