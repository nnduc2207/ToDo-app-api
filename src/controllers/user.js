const User = require('../models/User')

const createUser = async (req, res) => {
    const user = new User(req.body)
    await user.save()
    const token = user.generateAuthToken()
    res.json({ user, token})
}

module.exports = {
    createUser,
}