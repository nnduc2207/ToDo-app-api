const express = require('express')

const { getTask, getTasks, createTask, updateTask, deleteTask } = require('../controllers/task')

const router = new express.Router()

router.get('/api/task', getTasks)

router.get('/api/task/:id', getTask)

router.post('/api/task', createTask)

router.patch(('/api/task/:id'), updateTask)

router.delete(('/api/task/:id'), deleteTask)

module.exports = router