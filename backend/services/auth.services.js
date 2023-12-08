const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");


const register = async (req, res) => {
    try {
        const newUser = new UserModel({
            ...req.body,
        });
        await newUser.save();
        res.status(200).send("User has been created.");

    } catch (err) {
        res.status(500).send("Something went wrong ");
    }
};


const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            res.status(401)
                .json({
                    status: 401,
                    message: "No user found by email:" + req.body.email
                })
            return;
        }
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordCorrect) {
            res.status(401)
                .json({
                    status: 401,
                    message: "Password incorrect !"
                })
            return;
        }

        const accessToken = jwt.sign(
            { id: user._id },
            process.env.JWTsecrets
        );

        const { password, ...otherDetails } = user._doc;
        res.status(200).json({ details: { ...otherDetails }, accessToken: accessToken });

    } catch (err) {
        console.log(err)
        res.status(500)
            .json({
                status: 500,
                message: "something went wrong"
            })
    }
};

const selfidentify = async (req, res) => {
    try {
        const { password, ...otherDetails } = req.user._doc;
        res.status(200).json(otherDetails);

    } catch (err) {
        res.status(500).send("Something went wrong ");
    }
};
const changemypassword = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        await UserModel.findByIdAndUpdate(req.user._id, {
            password: hashedPassword 
        });
        res.status(200).json({ message: "Password changed successfully" });
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};


module.exports = {
    login, register, selfidentify, changemypassword
}