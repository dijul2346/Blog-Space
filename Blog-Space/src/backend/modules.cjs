const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token =req.headers.token;
    if (!token) {
        return res.status(401).send("No Token");
    }
    try {
        const decoded = jwt.verify(token, "123random");
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send("Invalid token.");
    }
}

module.exports = authMiddleware;