let idCounter = 1;
const tasks = [
    {
        id: idCounter,
        name: "Complete Assingment",
        description: "Finish the backend API for the task management system",
        dueDate: "2024-12-15",
        status: "pending"
    }
]

// getting all the users
const getAllTasks = (req, res) => {
    res.status(200).json({
        isSucccess: true,
        tasks: tasks
    })
}

// getting single task
const getSingletask = (req, res) => {
    const taskId = req.params.id

    const targetTask = tasks.find(t => t.id === parseInt(taskId));

    if (!targetTask) {
        return res.status(400).json({
            isSucccess: false,
            message: `The task with id:${taskId} is not found!`
        })
    }

    return res.status(200).json({
        isSucccess: true,
        message: `Task with id:${taskId} is found!`,
        task: targetTask
    })
}

// creating a new task
const createNewTask = (req, res) => {
    const { name, description, dueDate, status } = req.body

    if (!name || !description || !dueDate || !status) {
        return res.status(400).json({
            isSucccess: false,
            message: "Please fill all the items!"
        })
    }

    const validStatus = ["completed", "pending", "in-progress"]

    if (!validStatus.includes(status)) {
        return res.status(400).json({
            isSucccess: false,
            message: "Please enter a valid status!"
        })
    }

    idCounter += 1
    const newTask = {
        id: idCounter,
        name,
        description,
        dueDate,
        status,
    }

    tasks.push(newTask)

    return res.status(200).json({
        isSucccess: true,
        message: "A new task was added",
        task: newTask
    })
}

module.exports = {
    getAllTasks,
    getSingletask,
    createNewTask
}