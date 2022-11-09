const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Task text cannot be empty!'],
    unique: true,
    trim: true,
    maxlength: [250, 'Task text cannot exceed 250 characters!']
  },
  isDone: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.models.Task || mongoose.model('Task', TaskSchema);