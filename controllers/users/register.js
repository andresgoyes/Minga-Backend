import User from './../../models/User.js'

let register = async (req, res, next) => {
    try {
        let user = req.body;
        let newUser = await User.create(user);
        return res.status(201).json({
            success: true,
            message: "User created successfully.",
            user: {
                email: newUser.email,
                role: newUser.role,
                photo: newUser.photo
            },
            token: req.token
        });
    } catch (error) {
        next(error);
    }
};

let registerMany = async (req, res, next) => {
    try {
        let users = req.body;
        let newUsers = await User.insertMany(users);

        return res.status(201).json({
            success: true,
            message: "Users created successfully.",
            response: newUsers
        });
    } catch (error) {
        next(error);
    }
};

export { register, registerMany };