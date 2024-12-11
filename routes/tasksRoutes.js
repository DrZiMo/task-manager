const { Router } = require("express");
const { getAllTasks, createNewTask } = require("../controllers/tasksController");

const router = Router();

router.get("/list", getAllTasks)

router.post("/new", createNewTask)

module.exports = router;