import { user } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'




export const Register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname.trim() || !email.trim() || !password.trim()) {
            return res.status(401).json({ message: "invalid data", success: false });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ message: "This email is already used", success: false })
        }
        // 🔑 Generate salt
        const salt = await bcrypt.genSalt(10);

        // 🔒 Hash password using salt
        const hashedPassword = await bcrypt.hash(password, salt);

        await user.create({
            fullname,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message: "Account created Successfully", success: true });

    } catch (error) {
        console.log(error);
    }
}

export const Login = async (req, res) => {
    try {
        const { password, email } = req.body;
        if (!password || !email) {
            return res.status(401).json({ message: "Invalid data", success: false });
        }

        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ message: "invalid email or password", success: false });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "invalid email or password", success: false });
        }
        const TokenData = {
            id: existingUser._id
        }
        const Token = await jwt.sign(TokenData, process.env.JWT_SECRET, { expiresIn: "1d" });

        return res.status(200).cookie("token", Token, { httpOnly: true }).json({ message: `welcome back ${existingUser.fullname}`, success: true, user: existingUser });

    } catch (error) {

    }
}


export const logOut = async (req, res) => {
    return res.status(200).cookie("token", "", { expires: new Date(Date.now()), httpOnly: true }).json({ message: "User logged out successfully" });
}