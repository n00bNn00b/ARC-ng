const express = require("express");
const router = express.Router();

require("../db/conn");
const Task = require("../model/taskSchema");

router.post("/addTask", async (req, res) => {
  const taskList = req.body;
  if (!taskList) {
    return res.status(422).json({
      error: "Please fill the required field!",
    });
  }

  try {
    const task = await Task.create(taskList);
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
router.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res
        .status(404)
        .json({ message: `cannot find any product with the ID: ${id}` });
    }
    // const successMessage = "Selected item has been deleted!";
    res.status(200).json({ task, message: "Selected item has been deleted!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
