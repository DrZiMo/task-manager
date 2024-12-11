const { Router } = require("express");
const { getAllTasks, createNewTask, getSingletask } = require("../controllers/tasksController");

const router = Router();

router.get("/list", getAllTasks)
router.get("/:id", getSingletask)
router.post("/new", createNewTask)

module.exports = router;