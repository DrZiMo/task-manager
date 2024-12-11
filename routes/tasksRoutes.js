const { Router } = require("express");
const { getAllTasks, createNewTask, getSingletask, deleteTask } = require("../controllers/tasksController");

const router = Router();

router.get("/list", getAllTasks)
router.get("/:id", getSingletask)
router.post("/new", createNewTask)
router.delete("/delete/:id", deleteTask)

module.exports = router;