
const Task = require('../models/Task')

const getTasks = async (req,res) => {
    const tasks = await Task.find()
    res.send(tasks)
}

const getTask = async (req,res) => {
    const task = await Task.findById(req.params.id)
    res.send(task)
}

const createTask = async (req, res) => {
    const task = new Task(req.body)
    await task.save()
    res.send(task)
}

const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(task)
}

const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.send()
}

module.exports = {
    getTask,
    getTasks,
    createTask,
    updateTask,
    deleteTask
}