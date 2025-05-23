const path = require("path");
require('dotenv').config();
const jwt = require("jsonwebtoken");

const JWTSECRET = process.env.JWTSECRET;
//console.log("✅ JWTSECRET Loaded:", JWTSECRET);

function verifyToken(req, res, next) {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.redirect("/user/login");
        }
        const decodedToken = jwt.verify(token, JWTSECRET);
        req.verifiedUser = decodedToken;
        next();
    } catch (error) {
        console.error("Verification Error:", error);
        res.clearCookie("token");
        return res.redirect("/user/login");
    }
}

function generateToken(payload) {
    return jwt.sign(payload, JWTSECRET);
}


module.exports = { verifyToken, generateToken };