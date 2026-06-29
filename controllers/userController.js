const User = require("../models/User");

// Register
exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.json({
            success: true,
            message: "User Registered"
        });

    } catch (err) {
        res.status(500).json(err);
    }
};

// Login
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        res.json({
            success: true,
            message: "Login Successful",
            user
        });

    } catch (err) {
        res.status(500).json(err);
    }
};