const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  body: {
      type: String,
      required: true,
    },
  expired: Date,
  isCompleted: {
        type: Boolean,
        default: false,
    }
});

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task