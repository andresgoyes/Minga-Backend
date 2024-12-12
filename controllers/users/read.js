import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {
        let all = await User.find();

        let formattedUsers = all.map(user => ({
            id: user._id,
            email: user.email,
            photo: user.photo,
            active: user.is_active
        }));

        return res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            response: formattedUsers
        });
    } catch (error) {
        next(error);
    }
};

let userById = async (req, res, next) => {
    try {
        let userId = req.params.id;
        let user = await User.findById(userId);

        if (user) {
            return res.status(200).json({
                success: true,
                message: "User found successfully",
                response: {
                    user,                    
                },
            });
        } else {
            return res.status(404).json({
                response: "User not found with the specified ID"
            });
        }
    } catch (error) {
        next(error);
    }
};

const userExists = async (req, res, next) => {
    try {
        
        return res.status(200).json({
            success: true,
            response: req.user
        })
        
    } catch (error) {
        next(error)
    }
}

export { allUsers, userById, userExists };