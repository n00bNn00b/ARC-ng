const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: [true, "Please Enter Task Name!"],
  },
  taskDescription: {
    type: String,
    required: [true, "Please Enter Task Description!"],
  },
  taskComment: {
    type: String,
    required: [true, "Please Enter Task Comment!"],
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
