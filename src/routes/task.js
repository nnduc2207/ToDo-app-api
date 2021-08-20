const express = require('express')
const Task = require('../models/Task')

const router = new express.Router()

router.get('/api/task', async (req,res) => {
    const tasks = await Task.find()
    res.send(tasks)
})

router.get('/api/task/:id', async (req,res) => {
    const task = await Task.findById(req.params.id)
    res.send(task)
})

router.post('/api/task', async (req, res) => {
    const task = new Task(req.body)
    await task.save()
    res.send(task)
})

router.patch(('/api/task/:id'), async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(task)
})


router.delete(('/api/task/:id'), async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.send()
})
module.exports = router