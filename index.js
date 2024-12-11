const express = require("express")
const dotenv = require("dotenv")
const taskRouter = require("./routes/tasksRoutes")

const app = express()
dotenv.config()

app.use(express.json())

app.use("/tasks", taskRouter)

// listening to port
const PORT = process.env.PORT;
app.listen(PORT, console.log("Listening to port " + PORT))