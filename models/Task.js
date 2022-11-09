const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Task text cannot be empty!'],
    unique: true,
    trim: true,
    maxLength: [250, 'Task text cannot exceed 250 characters!']
  }
})

module.exports = mongoose.models.List || mongoose.model('List', ListSchema);