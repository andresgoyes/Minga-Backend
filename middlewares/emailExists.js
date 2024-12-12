import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        const { email } = req.body;
        const userId = req.params.id;

        const existingUser = await User.findOne({ email, _id: { $ne: userId } });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already in use",
            });
        }

        next();
    } catch (error) {
        next(error);
    }
};