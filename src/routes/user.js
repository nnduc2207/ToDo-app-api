const express = require('express')
const { createUser } = require('../controllers/user')
const { authenticateJWT } = require('../services/auth')

const router = new express.Router()

router.post('/api/user', createUser)

router.get('/api/user', authenticateJWT, (req, res) => {
    res.send('Autheticated!!!')
})

module.exports = router