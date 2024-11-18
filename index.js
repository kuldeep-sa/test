const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

const port = 4000
const User = require("./models/schema")
const routes = require("./routes/list")
const { connectDB } = require("./connection")

connectDB("mongodb://127.0.0.1:27017/HoJai")
    .then(() => console.log("Database Connected"))

app.use(express.urlencoded({ extended: true }))
app.use(express.static("./views"))


io.on("connection", (socket) => {
    console.log("A new user has connected", socket.id);
})

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

// app.use("/", routes)

server.listen(port, () => {
    console.log(`Listening at ${port}`);
})