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

module.exports = getAllTasks