import User from "../../models/User.js";

let deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully.",
            response: deletedUser,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteUser };