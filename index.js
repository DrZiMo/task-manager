const express = require("express")
const dotenv = require("dotenv")
const router = require("./routes/tasksRoutes")

const app = express()
dotenv.config()

app.use(express.json())

app.use("/tasks", router)

// listening to port
const PORT = process.env.PORT;
app.listen(PORT, console.log("Listening to port " + PORT))