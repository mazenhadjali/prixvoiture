const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const authenticateToken = async (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ","")

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized: No token provided",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWTsecrets);

        // Assuming your User model has a findById method
        const user = await UserModel.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized: User not found",
            });
        }

        // Set the user in req.user for further use in the route handlers
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            status: 401,
            message: "Unauthorized: Invalid token",
        });
    }
};

module.exports = authenticateToken;
