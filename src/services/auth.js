const User = require('../models/User')

const authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Please login 1' })
    }
    const token = authHeader.split(' ')[1];
    try {
        const user = await User.findByToken(token)
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({ error: 'Please login 2' })
    }
};

module.exports = {
    authenticateJWT,
}