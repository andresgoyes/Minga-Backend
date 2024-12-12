import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
    try {
        const { password } = req.body;
        const passwordDB = req.user.password;

        const isMatch = await bcryptjs.compare(password, passwordDB);

        if (isMatch) {
            delete req.body.password;
            return next();
        }

        return res.status(401).json({
            success: false,
            message: "Invalid credentials",
        });
    } catch (error) {
        next(error);
    }
};