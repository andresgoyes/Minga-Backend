import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        const account = await User.findOne({ email: req.body.email });

        if (!account) {
            return res.status(404).json({
                success: false,
                message: "Account does not exist",
            });
        }

        req.user = {
            email: account.email,
            password: account.password,
            role: account.role,
            photo: account.photo,
        };

        next();
    } catch (error) {
        next(error);
    }
};