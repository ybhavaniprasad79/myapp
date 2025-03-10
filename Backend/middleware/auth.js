const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
    const token = req.cookies.accesstoken || req.headers.authorization?.split(" ")[1];

    console.log("Cookies:", req.cookies);
    console.log("Token received:", token);

    if (!token) {
        return res.status(401).json({ success: false, message: "Token not found" });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid or expired token" });
        }

        req.user_id = decoded.id;  
        next();
    }); 
};

module.exports = auth;