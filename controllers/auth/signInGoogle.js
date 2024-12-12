import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        );
        return res.redirect(`${process.env.FRONTEND_URL}/home?token=${req.token}`);
    } catch (error) {
        next(error);
    }
};