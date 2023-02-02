const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please tell us your title!"],
  },
  description: {
    type: String,
    required: [true, "Please tell us your description!"],
  },
  status: {
    type: String,
    default: "open",
    enum: ["open", "closed"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must have user"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
