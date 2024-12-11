const { Router } = require("express");
const getAllTasks = require("../controllers/tasksController");

const router = Router();

router.get("/list", getAllTasks)

module.exports = router;