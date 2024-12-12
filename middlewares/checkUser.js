import User from "../models/User.js";

const checkUser = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email || req.user.email });
        
        if (!user.is_active) {            
            return res.status(403).json({
                success: false,
                message: "Your account is inactive. Please contact a manager."
            });
        }

        next();
    } catch (error) {
        next(error);
    }
};

export default checkUser;